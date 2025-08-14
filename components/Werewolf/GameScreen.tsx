import { useState, useMemo } from "react";
import { Search, Plus, Users, Crown, Timer, Mic, Moon, Sun, LogOut, Settings, MessageSquareText, Shield, Swords, Eye, EyeOff, CheckCircle2, AlertCircle, Flame, Ghost, ChevronRight, X, Copy, Lock, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pill from "./Pill";
import RoleCard from "./RoleCard";

const mockPlayers = [
  { id: 1, name: "Luna", role: "Villager", alive: true },
  { id: 2, name: "Kai", role: "Werewolf", alive: true },
  { id: 3, name: "Mina", role: "Seer", alive: true },
  { id: 4, name: "Tae", role: "Hunter", alive: true },
  { id: 5, name: "Nok", role: "Witch", alive: false },
  { id: 6, name: "Bo", role: "Villager", alive: true },
  { id: 7, name: "Fern", role: "Villager", alive: true },
  { id: 8, name: "Aom", role: "Werewolf", alive: true },
];

export default function GameScreen({ onLeave }: { onLeave: () => void }) {
  const [night, setNight] = useState(true);
  const [mute, setMute] = useState(false);
  const [voteTarget, setVoteTarget] = useState<number | null>(null);

  return (
    <div className="pb-28">
      <div className="p-4 sticky top-0 z-20 bg-background/80 backdrop-blur border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className="rounded-full">กำลังเล่น</Badge>
          <Pill>รอบที่ 3</Pill>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-2xl" onClick={() => setNight((n) => !n)}>
            {night ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
          </Button>
          <Button variant="ghost" size="icon" className="rounded-2xl" onClick={onLeave}><LogOut className="h-5 w-5"/></Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <RoleCard role="Seer" night={night} />

        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2"><Users className="h-4 w-4"/> ผู้เล่น</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 grid grid-cols-4 gap-3">
            {mockPlayers.map((p) => (
              <button
                key={p.id}
                className={`rounded-2xl border p-2 flex flex-col items-center ${voteTarget === p.id ? "ring-2" : ""}`}
                onClick={() => setVoteTarget(p.id)}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${p.name}`} />
                  <AvatarFallback>{p.name.slice(0,2)}</AvatarFallback>
                </Avatar>
                <span className="text-[11px] mt-1 truncate w-full text-center">{p.name}</span>
                <Badge variant={p.alive ? "secondary" : "destructive"} className="mt-1 rounded-full text-[9px]">{p.alive ? "มีชีวิต" : "ตายแล้ว"}</Badge>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2"><MessageSquareText className="h-4 w-4"/> แชท</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-3">
            <div className="text-xs text-muted-foreground">[ระบบ] เริ่มช่วงอภิปราย 90 วินาที</div>
            <div className="rounded-xl border p-2 text-sm">Mina: เราควรเช็ค Kai ก่อนมั้ย</div>
            <div className="rounded-xl border p-2 text-sm">Kai: ผมเป็นชาวบ้านนะ!</div>
            <div className="flex gap-2">
              <Input placeholder="พิมพ์ข้อความ..." className="flex-1"/>
              <Button className="rounded-2xl">ส่ง</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="rounded-2xl h-12">
            <Timer className="h-4 w-4 mr-2"/> เหลือ 28s
          </Button>
          <Button className="rounded-2xl h-12">
            โหวต {voteTarget ? `#${voteTarget}` : "(เลือกคน)"}
          </Button>
          <Button variant={mute ? "secondary" : "outline"} className="rounded-2xl h-12" onClick={() => setMute((m) => !m)}>
            <Mic className="h-4 w-4 mr-2"/>{mute ? "ไมค์ปิด" : "ไมค์เปิด"}
          </Button>
          <Button variant="outline" className="rounded-2xl h-12">
            {night ? <EyeOff className="h-4 w-4 mr-2"/> : <Eye className="h-4 w-4 mr-2"/>}
            {night ? "เงียบเสียง" : "เผยผล"}
          </Button>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur">
        <Tabs defaultValue="game" className="w-full">
          <TabsList className="grid w-full grid-cols-3 p-1">
            <TabsTrigger value="rooms" className="rounded-xl text-xs">ห้อง</TabsTrigger>
            <TabsTrigger value="lobby" className="rounded-xl text-xs">ล็อบบี้</TabsTrigger>
            <TabsTrigger value="game" className="rounded-xl text-xs">เกม</TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </div>
  );
}