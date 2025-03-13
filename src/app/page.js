import CustomMarquee from "@/common/CustomMarquee";
import ClickToEarn from "@/components/ClickToEarn";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowBuy from "@/components/HowBuy";
import JoinCulture from "@/components/JoinCulture";
import MeetPeperuney from "@/components/MeetPeperuney";
import MemeGallery from "@/components/MemeGallery";
import OurPartners from "@/components/OurPartners";
import Pizzanomics from "@/components/Pizzanomics";
import Toons from "@/components/Toons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <MeetPeperuney />
      <CustomMarquee parentClass="!bg-[#06754E]" />
      <HowBuy />
      <Pizzanomics />
      <CustomMarquee parentClass="max-w-[1920px] mx-auto" />
      <ClickToEarn />
      <Toons />
      <OurPartners />
      <MemeGallery />
      <CustomMarquee parentClass="!bg-[#06754E] max-w-[1920px] mx-auto" />
      <FAQ />
      <JoinCulture />
    </>
  );
}
