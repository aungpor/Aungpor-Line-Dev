
import Link from "next/link";
import { useState, useEffect } from "react";

const AppHeader = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll ลง
        setHidden(true);
      } else {
        // scroll ขึ้น
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold leading-tight hover:text-blue-600 transition-colors"
            >
              Aungpor-PC-Transfer
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
