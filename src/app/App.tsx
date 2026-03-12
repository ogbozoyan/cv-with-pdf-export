import { CVTemplate } from "./components/CVTemplate";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#dce8f3] px-3 py-5 sm:px-5 sm:py-8 print:bg-white print:p-0">
      <div className="pointer-events-none absolute inset-0 print:hidden">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-slate-300/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-[1120px]">
        <CVTemplate />
      </main>
    </div>
  );
}
