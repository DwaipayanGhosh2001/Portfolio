import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import Projects from "@/components/shared/Projects";
import Studies from "@/components/shared/Studies";
import Tech from "@/components/shared/Tech";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-dark-1">
      <div className="flex min-h-screen flex-col gap-20">
        <Header />
        <div className="flex-center md:mt-28">
          <HeroSection />
        </div>
        <div className="bg-about bg-cover ">
          <About />
        </div>
        <Studies />
        <Tech />
        <Projects />
        <div className="bg-dark-3 rounded-t-full pt-20">
        <Contact/>
        </div>
       
      </div>

    </main>
  );
}
