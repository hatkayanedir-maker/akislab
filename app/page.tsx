import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import System from "@/components/System";
import Services from "@/components/Services";
import AutomationDemo from "@/components/AutomationDemo";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <System />
        <Services />
        <AutomationDemo />
        <Industries />
        <Process />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
