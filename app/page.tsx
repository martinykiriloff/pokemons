import HeroSection from "./components/HeroSection";
import TilesPage from "./tiles/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black w-full">
      <main className="flex flex-col min-h-screen w-full">
        <HeroSection />
        <TilesPage />
      </main>
    </div>
  );
}
