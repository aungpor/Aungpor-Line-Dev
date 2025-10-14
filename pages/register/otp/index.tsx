import GenLinkModalContent from '@/components/GenLinkModalContent';
import { getRegistrationStep } from '@/utils/registration';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TvIcon from '@mui/icons-material/Tv';
import { GetServerSideProps } from 'next';
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const topics = [
    { icon: <TvIcon fontSize="large" />, title: "Home TV", description: "TV Transfer", path: "/home-tv" },
    { icon: <MenuBookIcon fontSize="large" />, title: "Pixiv", description: "Pixiv Translate", path: "/pixiv" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
      <div className="w-full">
        <GenLinkModalContent/>

      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = ctx.req.cookies;
  const step = cookies.registrationStep; // สมมติเราเก็บไว้ใน cookie จากหน้าแรก

  if (step !== "otp") {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  return { props: {} };
};