import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import RatesOverview from "@/components/home/RatesOverview";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSummary from "@/components/home/AboutSummary";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <RatesOverview />
      <Features />
      <HowItWorks />
      <AboutSummary />
      <CtaBanner />
    </>
  );
}
