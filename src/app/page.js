import CustomMarquee from "@/common/CustomMarquee";
import Hero from "@/components/Hero";
import MeetPeperuney from "@/components/MeetPeperuney";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CustomMarquee />
      <MeetPeperuney />
    </>
  );
}
