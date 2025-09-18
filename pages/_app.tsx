import Head from "next/head";
import type { AppProps } from "next/app";
import AppHeader from "@/components/Header/AppHeader";
import "@/styles/globals.css";
import AppFooter from "@/components/Footer/AppFooter";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isCustomLayout = router.pathname === "/home-tv";
  
  return (
    <>
      <AppHeader />

      <div
        className={`${isCustomLayout
            ? "min-h-screen" 
            :"lg:min-h-[calc(100vh-104px)] min-h-[calc(100vh-48px)] lg:mx-[30px] mx-[10px]"
          }  from-slate-50 to-slate-100 text-slate-900`}
      >
        <Component {...pageProps} />
      </div>


      {/* <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aungpor-PC-Transfer
      </footer> */}
    </>
  );
}
