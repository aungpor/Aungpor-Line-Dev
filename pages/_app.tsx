import Head from "next/head";
import type { AppProps } from "next/app";
import AppHeader from "@/components/Header/AppHeader";
import "@/styles/globals.css";
import AppFooter from "@/components/Footer/AppFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader/>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
        <Component {...pageProps} />
      </div>


      {/* <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aungpor-PC-Transfer
      </footer> */}
    </>
  );
}
