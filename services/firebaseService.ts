// services/firebaseService.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getDatabase, ref, onValue, set, update, remove, DatabaseReference 
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBLxZ4c_9TtHJ8ObIY_iQFP6QkNUYsw0lU",
  authDomain: "aungpor-web-2d637.firebaseapp.com",
  projectId: "aungpor-web-2d637",
  storageBucket: "aungpor-web-2d637.firebasestorage.app",
  messagingSenderId: "278788942191",
  appId: "1:278788942191:web:ac7027e9fcc95fb82fa09a",
  measurementId: "G-6TNNG4RT2Z"
};

// ✅ ป้องกัน Duplicate App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);

// ฟังผู้เล่นในห้อง
export const listenPlayers = (roomId: string, callback: (data: any) => void) => {
  const playersRef = ref(db, `rooms/${roomId}/players`);
  onValue(playersRef, (snapshot) => {
    callback(snapshot.val() || {});
  });
};

// เข้าร่วมเกม
export const joinGame = (roomId: string, name: string, uid: string) => {
  return set(ref(db, `rooms/${roomId}/players/${uid}`), {
    name,
    role: "villager",
    alive: true
  });
};

// ออกจากเกม
export const leaveGame = (roomId: string, uid: string) => {
  return remove(ref(db, `rooms/${roomId}/players/${uid}`));
};

// สุ่มบทบาท
export const assignRoles = (roomId: string, players: Record<string, any>) => {
  const roles = ["werewolf", "villager", "villager"];
  const shuffled = Object.keys(players).map((id, idx) => ({
    uid: id,
    role: roles[idx % roles.length]
  }));

  shuffled.forEach((p) => {
    update(ref(db, `rooms/${roomId}/players/${p.uid}`), { role: p.role });
  });
};

// ฆ่าผู้เล่น
export const killPlayer = (roomId: string, playerId: string) => {
  return update(ref(db, `rooms/${roomId}/players/${playerId}`), { alive: false });
};
