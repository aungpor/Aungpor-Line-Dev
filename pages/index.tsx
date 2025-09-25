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
        <h2 className="text-lg font-bold mb-4">Recommended topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => { router.push(topic.path) }}
              className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                {topic.icon}
                <span className="font-semibold">{topic.title}</span>
              </div>
              <p className="text-sm text-gray-700">{topic.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
