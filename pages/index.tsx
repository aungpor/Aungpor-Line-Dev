import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Link as LinkIcon, ClipboardCopy, Check } from "lucide-react";
import { creatUrl, getAllUrl } from "@/services/url.service";



export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-0 sm:pr-6 lg:pr-8 lg:pl-0 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 h-[100vh]">

        <div className="md:col-span-3 relative overflow-hidden">

        </div>

        <div className="md:col-span-7 relative overflow-hidden">
          
        </div>
      </div>



    </div>
  );
}
