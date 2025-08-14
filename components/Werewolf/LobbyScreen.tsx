import React from "react";
import { Search, Plus, Users, Crown, Timer, Mic, Moon, Sun, LogOut, Settings, MessageSquareText, Shield, Swords, Eye, EyeOff, CheckCircle2, AlertCircle, Flame, Ghost, ChevronRight, X, Copy, Lock, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import SectionTitle from "./SectionTitle";
import Pill from "./Pill";

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

export default function LobbyScreen({ roomId, onStart, onLeave }: { roomId: string; onStart: () => void; onLeave: () => void }) {
  
  const chip = (text: string) => (
  <Badge variant="secondary" className="text-xs rounded-full px-2 py-0.5">{text}</Badge>
);


  return (
    <div className="pb-24">
      <div className="p-4 flex items-center justify-between border-b sticky top-0 bg-background/80 backdrop-blur z-10">
        <div className="flex items-center gap-2">
          <Badge className="rounded-full">ล็อบบี้</Badge>
          <span className="text-sm text-muted-foreground">รหัสห้อง</span>
          <Pill>{roomId}</Pill>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-2xl"><Copy className="h-4 w-4 mr-1"/>คัดลอกลิงก์</Button>
          <Button variant="ghost" size="icon" className="rounded-2xl" onClick={onLeave}><LogOut className="h-5 w-5"/></Button>
        </div>
      </div>

      <SectionTitle icon={Users} title="ผู้เล่นในห้อง" action={<span className="text-xs text-muted-foreground">ต้องมีอย่างน้อย 5 คน</span>} />
      <div className="p-4 grid grid-cols-4 gap-3">
        {mockPlayers.map((p) => (
          <Card key={p.id} className="rounded-2xl">
            <CardContent className="p-3 flex flex-col items-center">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${p.name}`} />
                <AvatarFallback>{p.name.slice(0,2)}</AvatarFallback>
              </Avatar>
              <div className="text-xs mt-2 font-medium truncate w-full text-center">{p.name}</div>
              <Badge variant={p.alive ? "secondary" : "destructive"} className="mt-1 rounded-full text-[10px]">
                {p.alive ? "Ready" : "Away"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <SectionTitle icon={Settings} title="ตั้งค่าเกมแบบย่อ" />
      <div className="p-4 space-y-3">
        <Card className="rounded-2xl">
          <CardContent className="p-4 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2"><Mic className="h-4 w-4"/> เปิดเสียง</div>
            <Toggle defaultPressed><CheckCircle2 className="h-4 w-4"/></Toggle>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="p-4 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2"><Timer className="h-4 w-4"/> เวลาโหวต/พูดต่อรอบ</div>
            <div className="flex items-center gap-2">
              {chip("พูด 90s")}
              {chip("โหวต 30s")}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur border-t flex gap-3">
        <Button variant="outline" className="rounded-2xl flex-1" onClick={onLeave}><X className="h-4 w-4 mr-1"/>ออกจากห้อง</Button>
        <Button className="rounded-2xl flex-1" onClick={onStart}><Swords className="h-4 w-4 mr-1"/>เริ่มเกม</Button>
      </div>
    </div>
  );
}