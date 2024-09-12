import localFont from "next/font/local";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { useContext } from "react";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import ToggleBar from "@/components/ToggleBar";

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

export default function Home() {
  const { toggle } = useContext(MobileToggleContext);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <NavBar />
      {/* { toggle && <ToggleBar /> } */}
      <ToggleBar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>hello</h1>
      </main>
    </div>
  );
}
