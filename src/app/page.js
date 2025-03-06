import CustomMarquee from "@/common/CustomMarquee";
import Hero from "@/components/Hero";
import HowBuy from "@/components/HowBuy";
import MeetPeperuney from "@/components/MeetPeperuney";
import Pizzanomics from "@/components/Pizzanomics";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <MeetPeperuney />
      <CustomMarquee parentClass="!bg-[#06754E]" />
      <HowBuy />
      {/* <Pizzanomics /> */}
    </>
  );
}
