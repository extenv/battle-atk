# ⚔️ Battle Multiplayer Game (SolidJS + Socket.IO)

Game pertarungan real-time 1v1 berbasis web menggunakan **SolidJS** di sisi client dan **Express + Socket.IO** di sisi server.

---

## 🛠️ Cara Install

### 1. Clone atau Extract ZIP
Download dan extract file ZIP ke folder lokal kamu, misalnya:

```bash
unzip battle-multiplayer.zip
cd battle-multiplayer
```

---

### 2. Install Dependency

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

## 🎮 Cara Bermain

1. **Jalankan server** terlebih dahulu di terminal:
   ```bash
   cd server
   npm start
   ```

2. **Jalankan client** di tab terminal lain:
   ```bash
   cd client
   npm run dev
   ```

3. **Buka browser** di dua tab atau dua perangkat:
   ```
   http://localhost:5173
   ```

4. Setiap pemain akan otomatis masuk ke game room.

5. **Gameplay:**
   - Pemain pertama yang masuk akan memulai giliran.
   - Klik tombol **Attack** untuk menyerang lawan.
   - Damage yang diberikan acak (antara 5–25).
   - Pemain yang HP-nya habis terlebih dahulu kalah.

---

## 📦 Teknologi Digunakan
- SolidJS + Vite (Client)
- Express + Socket.IO (Server)
- Tailwind CSS (untuk styling sederhana)
- Typescript + JSX

---

## 📌 Catatan
- Pastikan **port 3000 (server)** dan **5173 (client)** tidak bentrok.
- Kamu bisa deploy server di **Render / Railway** dan client di **Vercel / Netlify**.
- Bisa dimainkan dengan mengakses dari dua browser atau perangkat berbeda.
