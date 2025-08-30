// services/novel.service.tsx
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

const COLLECTION_NAME = "urls";

// 🔹 ดึงทั้งหมด
export async function getAllUrl() {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("create_at", "desc") // เรียงจากใหม่ -> เก่า
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      create_at: data.create_at?.toDate().toISOString() || null,
    };
  });
}

// 🔹 เพิ่มข้อมูลใหม่
export async function createNovel(data: any) {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
  return { id: docRef.id, ...data };
}