

const AppHeader = () => {
  return (
    <>
      <header className="hidden md:block sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-xl font-semibold leading-tight">Aungpor-PC-Transfer</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
