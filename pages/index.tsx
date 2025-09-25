import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import LockIcon from "@mui/icons-material/Lock";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import JavascriptIcon from "@mui/icons-material/Javascript";
import DataObjectIcon from "@mui/icons-material/DataObject";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import TvIcon from '@mui/icons-material/Tv';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  
  const topics = [
    { icon: <TvIcon fontSize="large" />, title: "Home TV", description: "TV Transfer", path:"/home-tv"}
  ];

  return (
   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-[30px]">

      <div className="w-full">
        <h2 className="text-lg font-bold mb-4">Recommended topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={()=>{router.push(topic.path)}}
              className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition-shadow"
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
