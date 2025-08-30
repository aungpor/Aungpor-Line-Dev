import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Link as LinkIcon, ClipboardCopy, Check } from "lucide-react";

function normalizeUrl(raw: string): string | null {
  const s = raw.trim();
  if (!s) return null;
  try {
    const url = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`);
    return url.toString();
  } catch {
    return null;
  }
}

function favicon(src: string) {
  try {
    const u = new URL(src);
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`;
  } catch {
    return undefined;
  }
}

export default function AungporPCTransfer() {
  const [bulkText, setBulkText] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("aungpor_pc_transfer_urls");
    if (saved) {
      try { setUrls(JSON.parse(saved)); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("aungpor_pc_transfer_urls", JSON.stringify(urls));
  }, [urls]);

  const parsedLines = useMemo(() => {
    return bulkText
      .split(/\n|,|\s+/)
      .map(normalizeUrl)
      .filter((v): v is string => Boolean(v));
  }, [bulkText]);

  const addUrls = () => {
    if (parsedLines.length === 0) return;
    setUrls((prev) => {
      const set = new Set(prev);
      for (const u of parsedLines) set.add(u);
      return Array.from(set);
    });
    setBulkText("");
    inputRef.current?.focus();
  };

  const removeUrl = (u: string) => setUrls((prev) => prev.filter((x) => x !== u));

  const copyUrl = async (u: string) => {
    try {
      await navigator.clipboard.writeText(u);
      setCopied(u);
      setTimeout(() => setCopied(null), 1200);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-bold">AP</div>
            <div>
              <h1 className="text-xl font-semibold leading-tight">Aungpor-PC-Transfer</h1>
              {/* <p className="text-xs text-slate-500">แบ่งพื้นที่แนวนอน 3:7 • ซ้ายใส่ข้อความ • ขวาแสดงลิสต์ URL</p> */}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* Left 3/10 with background image */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="md:col-span-3 relative overflow-hidden rounded-2xl"
            style={{
              backgroundImage: `url('https://pbs.twimg.com/media/Gma1xsDaUAE4ulT?format=jpg&name=large')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 w-full h-full p-4 sm:p-5 flex flex-col text-white">
              <h2 className="text-base font-semibold mb-3">ช่องใส่ข้อความ</h2>
              <p className="text-sm mb-3">วาง URL ได้หลายบรรทัด / คั่นด้วยช่องว่างหรือเครื่องหมายจุลภาค แล้วกดเพิ่ม</p>

              <textarea
                ref={inputRef}
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder="เช่น: example.com\nhttps://github.com\nnews.ycombinator.com"
                className="min-h-[180px] w-full resize-y rounded-xl border border-white/30 px-3 py-2 outline-none focus:ring-4 focus:ring-white/30 bg-white/20 text-white placeholder-white/70"
              />

              <div className="mt-4 flex items-center justify-between text-white/90">
                <div className="text-xs">จะเพิ่ม <span className="font-medium">{parsedLines.length}</span> รายการ</div>
                <button
                  onClick={addUrls}
                  disabled={parsedLines.length === 0}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/40 shadow-sm hover:shadow disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" /> เพิ่ม URL
                </button>
              </div>
            </div>
          </motion.section>

          {/* Right 7/10 */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="md:col-span-7"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-4 sm:px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-base font-semibold">ลิสต์ URL</h2>
                {urls.length > 0 && (
                  <button
                    onClick={() => setUrls([])}
                    className="text-sm rounded-xl px-3 py-1.5 border border-slate-300 hover:shadow"
                  >ลบทั้งหมด</button>
                )}
              </div>

              {urls.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-500">
                  ยังไม่มีรายการ URL—เพิ่มจากแถบด้านซ้ายได้เลย
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {urls.map((u) => (
                    <li key={u} className="px-4 sm:px-5 py-3 flex items-center gap-3">
                      <img src={favicon(u)} alt="" className="w-6 h-6 rounded" />
                      <a
                        href={u}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 truncate hover:underline"
                        title={u}
                      >
                        {u}
                      </a>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => copyUrl(u)}
                          className="p-2 rounded-xl border border-slate-300 hover:shadow"
                          title="คัดลอก"
                        >
                          {copied === u ? <Check className="w-4 h-4" /> : <ClipboardCopy className="w-4 h-4" />}
                        </button>
                        <a
                          href={u}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl border border-slate-300 hover:shadow"
                          title="เปิดลิงก์"
                        >
                          <LinkIcon className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => removeUrl(u)}
                          className="p-2 rounded-xl border border-rose-200 hover:shadow text-rose-600"
                          title="ลบรายการ"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aungpor-PC-Transfer
      </footer>
    </div>
  );
}
