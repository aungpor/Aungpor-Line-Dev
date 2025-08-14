import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Users, Crown, Timer, Mic, Moon, Sun, LogOut, Settings, MessageSquareText, Shield, Swords, Eye, EyeOff, CheckCircle2, AlertCircle, Flame, Ghost, ChevronRight, X, Copy, Lock, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import RoomsScreen from "@/components/Werewolf/RoomsScreen";
import LobbyScreen from "@/components/Werewolf/LobbyScreen";
import GameScreen from "@/components/Werewolf/GameScreen";


export default function WerewolfMobileApp() {
  const [screen, setScreen] = useState<"rooms" | "lobby" | "game">("rooms");
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);

  return (
    <div className="max-w-sm mx-auto min-h-[100dvh] bg-background text-foreground relative">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://assets.cdn-hot.org/emoji/moon.svg" alt="moon" className="h-5 w-5"/>
            <span className="font-bold">Werewolf</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-full text-[10px]">Mobile</Badge>
            <Button variant="outline" size="icon" className="rounded-2xl" onClick={() => setScreen("rooms")}><Users className="h-4 w-4"/></Button>
            <Button variant="outline" size="icon" className="rounded-2xl" onClick={() => setScreen("lobby")}><Crown className="h-4 w-4"/></Button>
            <Button variant="outline" size="icon" className="rounded-2xl" onClick={() => setScreen("game")}><Swords className="h-4 w-4"/></Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {screen === "rooms" && (
          <motion.div key="rooms" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <RoomsScreen onEnter={(roomId) => { setCurrentRoom(roomId); setScreen("lobby"); }} />
          </motion.div>
        )}
        {screen === "lobby" && (
          <motion.div key="lobby" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <LobbyScreen
              roomId={currentRoom ?? "RW-2718"}
              onStart={() => setScreen("game")}
              onLeave={() => setScreen("rooms")}
            />
          </motion.div>
        )}
        {screen === "game" && (
          <motion.div key="game" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <GameScreen onLeave={() => setScreen("rooms")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
