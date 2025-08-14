
import RoomsScreen from "@/components/Werewolf/RoomsScreen";
import { useRouter } from "next/router";

export default function RoomsPage() {
  const router = useRouter();
  return (
    <RoomsScreen onEnter={(roomId) => router.push(`/lobby/${roomId}`)} />
  );
}
