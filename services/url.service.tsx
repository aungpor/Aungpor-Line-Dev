// services/novel.service.tsx
import { IUrlData } from "@/interface/novel.interface";
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
export async function getAllUrl(): Promise<IUrlData[]> {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("create_at", "desc"), // Sort from newest to oldest
    limit(10) // Limit the results to the 10 most recent documents
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      url_id: doc.id,
      url: data.url || "", // Assuming `url` field exists in Firestore
    };
  });
}


// 🔹 เพิ่มข้อมูลใหม่
export async function creatUrl(data: any) {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
  return { id: docRef.id, ...data };
}