import Head from "next/head";
import type { AppProps } from "next/app";
import AppHeader from "@/components/Header/AppHeader";
import "@/styles/globals.css";
import AppFooter from "@/components/Footer/AppFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
