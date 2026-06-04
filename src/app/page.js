import HeroSection from "@/components/shared/HeroSection";
import StatsSection from "@/components/shared/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
   <div 
  className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center" 
  style={{ 
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/globe.png')" 
  }}
>
  <HeroSection></HeroSection>
  <StatsSection></StatsSection>
</div>
     
    </div>
  );
}
