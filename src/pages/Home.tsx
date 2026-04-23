import { Header } from "../components/Header";
import { Hero } from "../components/home_page/Hero";
import { Footer } from "../components/Footer";
import { Featured } from "../components/home_page/Featured";
import { CallToAction } from "../components/CTA";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 pt-0 px-2 md:px-4 lg:px-0 max-w-300 m-auto">
          <Hero />
          <Featured />
          <CallToAction
            heading="Let's create something magical together!"
            text="I am currently available for freelance opportunities, custom commissions, and creative collaborations. Whether you have a specific project in mind or just want to say hello, I'd love to hear from you!"
            btnText="Hire Me"
            link="/contact"
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
