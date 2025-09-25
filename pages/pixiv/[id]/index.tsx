import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { fetchBookById } from "@/services/novel.service";
import { GetServerSidePropsContext } from "next";
import { ThemeProvider, useTheme } from "next-themes";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightlightIcon from '@mui/icons-material/Nightlight';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';

export type book = {
  id: number;
  author: string;
  title: string;
  description: string;
  tags: string[];
  content: string;
  seriesNextId?: string;
  seriesPrevId?: string;
  err?: any;
};

interface IProps {
  book: book;
}

function NovelContent({ book }: IProps) {
  const router = useRouter();
  const [fontSize, setFontSize] = useState(18);
  const { theme, setTheme } = useTheme(); // next-themes

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 32));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 12));

  const goPrev = () => {
    if (book.seriesPrevId) router.push(`/pixiv/${book.seriesPrevId}`);
  };
  const goNext = () => {
    if (book.seriesNextId) router.push(`/pixiv/${book.seriesNextId}`);
  };

  // โหลด Google Translate
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "zh-CN",
          includedLanguages: "th",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const select = document.querySelector<HTMLSelectElement>(
          ".goog-te-combo"
        );
        if (select) {
          select.value = "th";
          select.dispatchEvent(new Event("change"));
        }
      }, 1000);
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8 my-8 bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Translate container */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          {book.title}
        </h2>

        <div className="flex flex-row gap-2 items-start sm:items-center">
          {/* Font size */}
          <button
            onClick={decreaseFont}
            className="px-3 py-1 rounded-lg border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <TextDecreaseIcon />
          </button>
          <button
            onClick={increaseFont}
            className="px-3 py-1 rounded-lg border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <TextIncreaseIcon />
          </button>

          {/* Theme switch */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 rounded-lg border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {theme === "light" ? <Brightness4Icon /> : <NightlightIcon />}
          </button>
        </div>
      </div>


      {/* Content */}
      <div
        className="leading-relaxed lg:min-h-[calc(100vh-104px)] min-h-[calc(100vh-48px)]"
        style={{ fontSize: `${fontSize}px` }}
      >
        {book.content.split("\n").map((line, idx) => {
          if (!line.trim()) return null;
          return (
            <p key={idx} className="mt-4">
              {line}
            </p>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-10 border-t pt-4 gap-4">
        <button
          onClick={goPrev}
          disabled={!book.seriesPrevId}
          className={`min-w-[120px] flex items-center gap-2 px-4 py-2 rounded-lg ${book.seriesPrevId
            ? "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          <ArrowBackIosNewIcon fontSize="small" /> ก่อนหน้า
        </button>

        <button
          onClick={goNext}
          disabled={!book.seriesNextId}
          className={`min-w-[120px] flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${book.seriesNextId
            ? "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          ถัดไป <ArrowForwardIosIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default function NovelReadWrapper(props: IProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <NovelContent {...props} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = `${ctx?.query?.id}` || "0";

  try {
    const book = await fetchBookById(id);

    if (!book) {
      return { notFound: true };
    }

    return { props: { book } };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
}
