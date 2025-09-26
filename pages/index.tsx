import GenLinkModalContent from '@/components/GenLinkModalContent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TvIcon from '@mui/icons-material/Tv';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const topics = [
    { icon: <TvIcon fontSize="large" />, title: "Home TV", description: "TV Transfer", path: "/home-tv" },
    { icon: <MenuBookIcon fontSize="large" />, title: "Pixiv", description: "Pixiv Translate", path: "/pixiv" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-[30px]">

      <div className="w-full">

        <GenLinkModalContent/>

      </div>
    </div>
  );
}
