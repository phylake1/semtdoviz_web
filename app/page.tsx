import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSummary from "@/components/home/AboutSummary";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <AboutSummary />
      <CtaBanner />
    </>
  );
}
