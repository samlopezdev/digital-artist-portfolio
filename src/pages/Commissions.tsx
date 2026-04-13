import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroAlt } from "../components/HeroAlt";
import { CommisionInfo } from "../components/commission_page/CommissionInfo";
import { PricingGuide } from "../components/commission_page/PricingGuide";
import { PaymentInfo } from "../components/commission_page/PaymentInfo";
import { Licensing } from "../components/commission_page/Licensing";
import { Deliverables } from "../components/commission_page/Deliverables";
import { AdditionalNotes } from "../components/commission_page/AdditionalNotes";

export default function Contact() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 max-w-300 m-auto">
          <HeroAlt
            titleStart="Commi"
            titleEnd="sions"
            text="Thank you so much for your interest in my work! I’m honored you’re considering a commission ♡"
          />
          <CommisionInfo />
          <PricingGuide />
          <PaymentInfo />
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 py-15">
            <Licensing />
            <Deliverables />
          </section>
          <AdditionalNotes />
        </main>
        <Footer />
      </div>
    </div>
  );
}
