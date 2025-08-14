import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Swords, Eye, AlertCircle, Flame, Ghost } from "lucide-react";
import { JSX } from "react";


const roleIcon: Record<string, JSX.Element> = {
  Villager: <Shield className="h-4 w-4" />,
  Werewolf: <Flame className="h-4 w-4" />,
  Seer: <Eye className="h-4 w-4" />,
  Hunter: <Swords className="h-4 w-4" />,
  Witch: <Ghost className="h-4 w-4" />,
};

export default function RoleCard({ role, night }: { role: string; night: boolean }) {
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