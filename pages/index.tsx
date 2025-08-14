import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Users, Crown, Timer, Mic, Moon, Sun, LogOut, Settings, MessageSquareText, Shield, Swords, Eye, EyeOff, CheckCircle2, AlertCircle, Flame, Ghost, ChevronRight, X, Copy, Lock, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";

// --- Mock helpers ---
const sampleRooms = [
  { id: "RW-2718", name: "Moonlit Tavern", host: "Luna", players: 7, max: 12, status: "Waiting", mode: "Classic", isPrivate: false, lang: "EN", hasVoice: true },
  { id: "RW-1024", name: "Forest Camp", host: "Kai", players: 10, max: 10, status: "Full", mode: "Chaos", isPrivate: true, lang: "TH", hasVoice: true },
  { id: "RW-3141", name: "Quiet Village", host: "Mina", players: 5, max: 9, status: "Waiting", mode: "Classic", isPrivate: false, lang: "TH", hasVoice: false },
  { id: "RW-8888", name: "Night Bazaar", host: "Aom", players: 9, max: 12, status: "Playing", mode: "Pro", isPrivate: false, lang: "EN", hasVoice: true },
];

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

const roleIcon: Record<string, JSX.Element> = {
  Villager: <Shield className="h-4 w-4" />,
  Werewolf: <Flame className="h-4 w-4" />,
  Seer: <Eye className="h-4 w-4" />,
  Hunter: <Swords className="h-4 w-4" />,
  Witch: <Ghost className="h-4 w-4" />,
};

const chip = (text: string) => (
  <Badge variant="secondary" className="text-xs rounded-full px-2 py-0.5">{text}</Badge>
);

// --- Mini UI atoms ---
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground">{children}</span>
  );
}

function SectionTitle({ icon: Icon, title, action }: { icon: any; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm font-semibold">{title}</span>
      </div>
      {action}
    </div>
  );
}

// --- Screens ---
function RoomsScreen({ onEnter }: { onEnter: (roomId: string) => void }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ voice: false, thaiOnly: false, publicOnly: false });

  const filtered = useMemo(() => {
    return sampleRooms.filter((r) => {
      if (filters.voice && !r.hasVoice) return false;
      if (filters.thaiOnly && r.lang !== "TH") return false;
      if (filters.publicOnly && r.isPrivate) return false;
      return (
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.id.toLowerCase().includes(query.toLowerCase()) ||
        r.host.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, filters]);

  return (
    <div className="pb-24">
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b">
        <div className="p-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาห้อง / รหัส / โฮสต์"
              className="pl-9 text-sm"
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-2xl">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-2xl">
              <SheetHeader>
                <SheetTitle>ตัวกรอง</SheetTitle>
              </SheetHeader>
              <div className="grid grid-cols-3 gap-3 py-4">
                <Toggle pressed={filters.voice} onPressedChange={(v) => setFilters((f) => ({ ...f, voice: v }))}>
                  <Mic className="h-4 w-4 mr-2" />เสียง
                </Toggle>
                <Toggle pressed={filters.thaiOnly} onPressedChange={(v) => setFilters((f) => ({ ...f, thaiOnly: v }))}>
                  TH
                </Toggle>
                <Toggle pressed={filters.publicOnly} onPressedChange={(v) => setFilters((f) => ({ ...f, publicOnly: v }))}>
                  <Globe className="h-4 w-4 mr-2" />สาธารณะ
                </Toggle>
              </div>
            </SheetContent>
          </Sheet>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-2xl"><Plus className="h-4 w-4 mr-1"/>สร้างห้อง</Button>
            </DialogTrigger>
            <DialogContent className="rounded-2xl">
              <DialogHeader>
                <DialogTitle>สร้างห้องใหม่</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <Input placeholder="ชื่อห้อง" />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">โหมด Classic</Button>
                  <Button variant="outline" className="flex-1">โหมด Pro</Button>
                </div>
                <Button>สร้างและเข้าไป</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <SectionTitle icon={Users} title="ห้องที่เปิดอยู่" />
      <div className="p-4 grid grid-cols-1 gap-3">
        {filtered.map((room) => (
          <motion.div key={room.id} layout>
            <Card className="rounded-2xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {room.isPrivate ? (
                      <Badge variant="destructive" className="rounded-full text-[10px] py-0.5"><Lock className="h-3 w-3 mr-1"/>Private</Badge>
                    ) : (
                      <Badge className="rounded-full text-[10px] py-0.5">Public</Badge>
                    )}
                    {chip(room.mode)}
                    {chip(room.lang)}
                    {room.hasVoice && chip("Voice")}
                  </div>
                  <Pill>{room.id}</Pill>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-semibold">{room.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Crown className="h-3 w-3"/> โฮสต์: {room.host}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium flex items-center justify-end gap-1"><Users className="h-4 w-4"/>{room.players}/{room.max}</div>
                    <div className="text-[11px] mt-1">
                      {room.status === "Waiting" && <Badge className="rounded-full">กำลังรอ</Badge>}
                      {room.status === "Playing" && <Badge variant="secondary" className="rounded-full">กำลังเล่น</Badge>}
                      {room.status === "Full" && <Badge variant="outline" className="rounded-full">เต็ม</Badge>}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm" className="rounded-2xl">รายละเอียด</Button>
                  <Button size="sm" className="rounded-2xl" onClick={() => onEnter(room.id)}>เข้าห้อง <ChevronRight className="h-4 w-4 ml-1"/></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LobbyScreen({ roomId, onStart, onLeave }: { roomId: string; onStart: () => void; onLeave: () => void }) {
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

function RoleCard({ role, night }: { role: string; night: boolean }) {
  const icon = roleIcon[role] ?? <AlertCircle className="h-4 w-4"/>;
  return (
    <motion.div layout className="rounded-2xl border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <div className="text-sm font-semibold">บทบาทของคุณ</div>
        </div>
        <Badge className="rounded-full text-[10px]">{night ? "กลางคืน" : "กลางวัน"}</Badge>
      </div>
      <div className="mt-3">
        <div className="text-xl font-bold flex items-center gap-2">{icon}{role}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {role === "Seer" && "คุณสามารถส่องผู้เล่นได้ 1 คนในช่วงกลางคืน"}
          {role === "Werewolf" && "ประชุมกับหมาป่าและกำจัดเหยื่อในยามค่ำคืน"}
          {role === "Villager" && "ใช้ตรรกะและการสื่อสารเพื่อค้นหาหมาป่า"}
          {role === "Witch" && "มีน้ำยารักษาและพิษ ใช้ได้คืนละหนึ่งครั้ง"}
          {role === "Hunter" && "หากคุณตาย เลือกยิงผู้เล่นได้ 1 คน"}
        </p>
      </div>
    </motion.div>
  );
}

function GameScreen({ onLeave }: { onLeave: () => void }) {
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
