import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isCustomLayout = router.pathname === "/home-tv";

  return (
    <>

      <div
        className={`${isCustomLayout
          ? "min-h-screen"
          : "lg:min-h-[calc(100vh-104px)] min-h-[calc(100vh-48px)] lg:mx-[30px] mx-[10px]"
          }  from-slate-50 to-slate-100 text-slate-900`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
