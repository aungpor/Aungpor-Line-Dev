// services/novelService.ts
import { getTranslatedNovel, book } from "@/lib/novel";

const cache = new Map<string, book>();

export async function fetchBookById(id: string): Promise<book> {
  let cached = cache.get(id);
  if (cached) return cached;

  console.log(`fetch book ${id}`);
  const novel = await getTranslatedNovel(id);
  cache.set(id, novel);

  return novel;
}
