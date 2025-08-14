import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-sm mx-auto min-h-[100dvh] bg-background text-foreground relative">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/chess-board.svg" alt="moon" className="h-6 w-6" />
            <span className="font-bold">Werewolf</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-full text-[10px]">Mobile</Badge>
            <Link href="/"><Button variant="outline" size="icon" className="rounded-2xl"><Users className="h-4 w-4" /></Button></Link>
            <Link href="/lobby/demo"><Button variant="outline" size="icon" className="rounded-2xl"><Crown className="h-4 w-4" /></Button></Link>
            <Link href="/game/demo"><Button variant="outline" size="icon" className="rounded-2xl"><Swords className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
