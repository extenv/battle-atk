# ⚔️ Battle Multiplayer Game (SolidJS + Socket.IO)

A real-time 1v1 battle game built with **SolidJS** on the client side and **Express + Socket.IO** on the server side.

---

## 🛠️ Installation Guide

### 1. Clone or Extract ZIP
Download and extract the ZIP file to your local folder, for example:

```bash
unzip battle-atk.zip
cd battle-atk
```

---

### 2. Install Dependencies

#### 🔹 Server (port 3000)
```bash
cd server
npm install
npm start
```

#### 🔹 Client (port 5173)
```bash
cd ../client
npm install
npm run dev
```

---

## 🎮 How to Play

1. **Start the server** first in a terminal:
   ```bash
   cd server
   npm start
   ```

2. **Start the client** in another terminal tab:
   ```bash
   cd client
   npm run dev
   ```

3. **Open your browser** in two tabs or on two devices:
   ```
   http://localhost:5173
   ```

4. Each player will automatically join a game room.

5. **Gameplay:**
   - The first player to join will take the first turn.
   - Click the **Attack** button to strike the opponent.
   - Damage is random (between 5–25).
   - The player whose HP reaches zero first loses.

---

## 📦 Tech Stack
- SolidJS + Vite (Client)
- Express + Socket.IO (Server)
- Tailwind CSS (for simple styling)
- Typescript + JSX

---

## 📌 Notes
- Make sure **port 3000 (server)** and **5173 (client)** are not in use.
- You can deploy the server to **Render / Railway** and the client to **Vercel / Netlify**.
- Playable from two browser tabs or two different devices.
