import localFont from "next/font/local";
import { Playpen_Sans } from "next/font/google";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ToggleBar from "@/components/ToggleBar";
import HeroSection from "@/components/HeroSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playwrightCuba = Playpen_Sans({
  variable: "--font-playwright-cuba",
  subsets: ["latin"]
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Header customFont={playwrightCuba} />
      <NavBar />
      <ToggleBar />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection customFont={playwrightCuba} />
      </main>
    </div>
  );
}
