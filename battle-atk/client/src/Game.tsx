import { createSignal, onCleanup, onMount } from 'solid-js';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Game() {
  const [playerHP, setPlayerHP] = createSignal(100);
  const [enemyHP, setEnemyHP] = createSignal(100);
  const [log, setLog] = createSignal<string[]>([]);
  const [turn, setTurn] = createSignal(false);
  const [status, setStatus] = createSignal("Waiting for another player...");

  onMount(() => {
    socket.emit('join-game');

    socket.on('joined', ({ playerId }) => {
      setLog(l => [`You joined as ${playerId}`, ...l]);
    });

    socket.on('start-game', ({ players }) => {
      setStatus("Game Started!");
      setTurn(players[0] === socket.id);
    });

    socket.on('attacked', ({ damage }) => {
      setPlayerHP(hp => Math.max(hp - damage, 0));
      setLog(l => [`You took ${damage} damage!`, ...l]);
      setTurn(true);
    });

    socket.on('opponent-left', () => {
      setStatus("Opponent left. You win!");
    });
  });

  onCleanup(() => {
    socket.disconnect();
  });

  const attack = () => {
    if (!turn()) return;

    const damage = Math.floor(Math.random() * 20) + 5;
    setEnemyHP(hp => Math.max(hp - damage, 0));
    socket.emit('attack', { damage });
    setLog(l => [`You dealt ${damage} damage!`, ...l]);
    setTurn(false);
  };

  return (
    <div class="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md text-white">
      <h1 class="text-xl font-bold mb-2">⚔️ Multiplayer Battle</h1>
      <p class="mb-4">{status()}</p>
      <div class="mb-2">
        <p>You: {playerHP()} HP</p>
        <p>Enemy: {enemyHP()} HP</p>
      </div>
      <button
        onClick={attack}
        disabled={!turn() || playerHP() === 0 || enemyHP() === 0}
        class="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Attack
      </button>
      {(playerHP() === 0 || enemyHP() === 0) && (
        <p class="mt-2 font-bold text-xl">
          {playerHP() === 0 ? '💀 You lost!' : '🏆 You win!'}
        </p>
      )}
      <div class="mt-4 max-h-40 overflow-y-auto text-sm bg-gray-700 p-2 rounded">
        <h2 class="font-semibold mb-2">Battle Log</h2>
        <ul>
          {log().map((entry, i) => (
            <li id={`log-entry-${i}`}>• {entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
