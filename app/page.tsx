import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { Products } from "@/components/site/products";
import { Pricing } from "@/components/site/pricing";
import { Trust } from "@/components/site/trust";
import { FAQ } from "@/components/site/faq";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Products />
      <Pricing />
      <Trust />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
