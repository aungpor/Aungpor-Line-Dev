import { useState, useMemo } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Pill from "./Pill";

const sampleRooms = [
  { id: "RW-2718", name: "Moonlit Tavern", host: "Luna", players: 7, max: 12, status: "Waiting", mode: "Classic", isPrivate: false, lang: "EN", hasVoice: true },
  { id: "RW-1024", name: "Forest Camp", host: "Kai", players: 10, max: 10, status: "Full", mode: "Chaos", isPrivate: true, lang: "TH", hasVoice: true },
  { id: "RW-3141", name: "Quiet Village", host: "Mina", players: 5, max: 9, status: "Waiting", mode: "Classic", isPrivate: false, lang: "TH", hasVoice: false },
  { id: "RW-8888", name: "Night Bazaar", host: "Aom", players: 9, max: 12, status: "Playing", mode: "Pro", isPrivate: false, lang: "EN", hasVoice: true },
];

export default function RoomsScreen({ onEnter }: { onEnter: (roomId: string) => void }) {
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

  const chip = (text: string) => (
    <Badge variant="secondary" className="text-xs rounded-full px-2 py-0.5">{text}</Badge>
  );

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
              <Button className="rounded-2xl"><Plus className="h-4 w-4 mr-1" />สร้างห้อง</Button>
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
                      <Badge variant="destructive" className="rounded-full text-[10px] py-0.5"><Lock className="h-3 w-3 mr-1" />Private</Badge>
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
                      <Crown className="h-3 w-3" /> โฮสต์: {room.host}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium flex items-center justify-end gap-1"><Users className="h-4 w-4" />{room.players}/{room.max}</div>
                    <div className="text-[11px] mt-1">
                      {room.status === "Waiting" && <Badge className="rounded-full">กำลังรอ</Badge>}
                      {room.status === "Playing" && <Badge variant="secondary" className="rounded-full">กำลังเล่น</Badge>}
                      {room.status === "Full" && <Badge variant="outline" className="rounded-full">เต็ม</Badge>}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm" className="rounded-2xl">รายละเอียด</Button>
                  <Button size="sm" className="rounded-2xl" onClick={() => onEnter(room.id)}>เข้าห้อง <ChevronRight className="h-4 w-4 ml-1" /></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}