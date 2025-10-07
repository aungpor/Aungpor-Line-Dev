import { useEffect } from "react";
import { useRouter } from "next/router";
import GenLinkModalContent from "@/components/GenLinkModalContent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TvIcon from "@mui/icons-material/Tv";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/register");
  }, [router]); // ✅ ให้ทำงานเมื่อโหลดหน้า

  const topics = [
    { icon: <TvIcon fontSize="large" />, title: "Home TV", description: "TV Transfer", path: "/home-tv" },
    { icon: <MenuBookIcon fontSize="large" />, title: "Pixiv", description: "Pixiv Translate", path: "/pixiv" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="w-full"></div>
    </div>
  );
}
