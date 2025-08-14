import { useEffect, useState } from "react";
import { listenPlayers, joinGame, leaveGame, assignRoles, killPlayer } from "../../services/firebaseService";

export default function Home() {
  const [roomId] = useState("room123");
  const [players, setPlayers] = useState<any>({});
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

  // 📡 ฟังข้อมูลผู้เล่น
  useEffect(() => {
    listenPlayers(roomId, setPlayers);
  }, [roomId]);

  const handleJoin = () => {
    const newUid = `uid_${Math.floor(Math.random() * 100000)}`;
    setUid(newUid);
    joinGame(roomId, name, newUid);
  };

  const handleLeave = () => {
    leaveGame(roomId, uid);
    setUid("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Werewolf Room: {roomId}</h1>

      <div>
        <input
          placeholder="ชื่อผู้เล่น"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!uid && <button onClick={handleJoin}>เข้าร่วม</button>}
        {uid && <button onClick={handleLeave}>ออกจากเกม</button>}
        <button onClick={() => assignRoles(roomId, players)}>สุ่มบทบาท</button>
      </div>

      <h2>ผู้เล่นในห้อง</h2>
      <ul>
        {Object.entries(players).map(([id, player]: any) => (
          <li key={id}>
            {player.name} - {player.role} {player.alive ? "🟢" : "🔴"}
            {player.alive && (
              <button onClick={() => killPlayer(roomId, id)} style={{ marginLeft: 10 }}>
                ฆ่า
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
