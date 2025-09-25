import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NovelRead() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const parsedUrl = new URL(url);
      const id = parsedUrl.searchParams.get("id"); // ดึงค่าจาก ?id=xxxxx

      if (id) {
        router.push(`/pixiv/${id}`);
      } else {
        alert("ไม่พบค่า id ใน URL");
      }
    } catch (err) {
      alert("URL ไม่ถูกต้อง");
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 lg:my-8 my-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="ใส่ Pixiv Novel URL"
          className="w-full border rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
        >
          ไป
        </button>
      </form>
    </div>
  );
}
