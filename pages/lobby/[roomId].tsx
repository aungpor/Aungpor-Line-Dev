
import LobbyScreen from "@/components/Werewolf/LobbyScreen";
import { useRouter } from "next/router";

export default function LobbyPage() {
  const router = useRouter();
  const { roomId } = router.query;

  if (!roomId) return null;

  return (
      <LobbyScreen
        roomId={roomId as string}
        onStart={() => router.push(`/game/${roomId}`)}
        onLeave={() => router.push("/")}
      />
  );
}
