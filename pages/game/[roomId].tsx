
import GameScreen from "@/components/Werewolf/GameScreen";
import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();
  const { roomId } = router.query;

  if (!roomId) return null;

  return (
      <GameScreen onLeave={() => router.push("/")} />
  );
}
