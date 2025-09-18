import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Link as LinkIcon, ClipboardCopy, Check } from "lucide-react";
import { creatUrl, getAllUrl } from "@/services/url.service";

export default function HomeTv() {
  const [bulkText, setBulkText] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Correct the type here

  useEffect(() => {
    const saved = localStorage.getItem("aungpor_pc_transfer_urls");
    if (saved) {
      try { setUrls(JSON.parse(saved)); } catch { }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("aungpor_pc_transfer_urls", JSON.stringify(urls));
  }, [urls]);


  useEffect(() => {
    fetchUrls();
  }, []);

  async function fetchUrls() {
      const fetchedUrls = await getAllUrl();
      const urlArray: string[] = fetchedUrls.map(item => item.url);
      console.log(urlArray);
      
      setUrls(urlArray);
    }

  const parsedLines = useMemo(() => {
    return bulkText
      .split(/\n|,|\s+/)
      .map(normalizeUrl)
      .filter((v): v is string => Boolean(v));
  }, [bulkText]);

  const addUrls = () => {
    if (parsedLines.length === 0) return;

    creatUrl({
      url: parsedLines,
      create_at: new Date()
    })
    fetchUrls()
    // setUrls((prev) => {
    //   const set = new Set(prev);
    //   console.log(parsedLines);
      
    //   for (const u of parsedLines) set.add(u);
    //   return Array.from(set);
    // });
    setBulkText("");
    inputRef.current?.focus();
  };

  const removeUrl = (u: string) => setUrls((prev) => prev.filter((x) => x !== u));

  const copyUrl = async (u: string) => {
    try {
      await navigator.clipboard.writeText(u);
      setCopied(u);
      setTimeout(() => setCopied(null), 1200);
    } catch { }
  };


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

  return (
    <>
        <main className="px-0 sm:pr-6 lg:pr-8 lg:pl-0 ">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 h-[100vh]">
          {/* Left 3/10 with background image */}
          <div className="md:col-span-3 relative overflow-hidden">
            <div className="bg-black/50 w-full h-full p-4 sm:p-5 flex flex-col items-center justify-center text-white"
              style={{
                backgroundImage: 'url(https://i.pinimg.com/736x/44/a9/a2/44a9a2f5962fe14494e2cb5ab9a5d4d0.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <input
                ref={inputRef}
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && parsedLines.length > 0) {
                    addUrls();
                  }
                }}
                placeholder="ใส่ Url มาเลย!!!"
                className="w-full max-w-md min-h-[50px] p-3 rounded-xl border border-white/30 outline-none  bg-white text-black placeholder-black/70"
              />
              <div className="mt-4 flex items-center justify-center text-white/90 w-full max-w-md">
                <button
                  onClick={addUrls}
                  disabled={parsedLines.length === 0}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 border border-white/50 bg-white text-black hover:bg-gray-200 opacity-80"
                >
                  <Plus className="w-4 h-4" /> เพิ่ม URL
                </button>
              </div>
            </div>
          </div>

          {/* Right 7/10 */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="md:col-span-7 pt-6 hidden md:block"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-4 sm:px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-base font-semibold">ลิสต์ URL</h2>
                {urls.length > 0 && (
                  <button
                    onClick={fetchUrls}
                    className="text-sm rounded-xl px-3 py-1.5 border border-slate-300 hover:shadow"
                  >รีเฟรช</button>
                )}
              </div>

              {urls.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-500">
                  ยังไม่มีรายการ URL—เพิ่มจากแถบด้านซ้ายได้เลย
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {urls.slice(0, 10).map((u) => (
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
    </>
      

    
  );
}
