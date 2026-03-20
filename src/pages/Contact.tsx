import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeroAlt } from '../components/HeroAlt';
import { CommisionInfo } from '../components/CommissionInfo';

export default function Contact() {
    return (
          <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
            <div className="flex h-full flex-col">
              <Header />
              <main className="flex flex-col items-center lg:py-16 pt-0 px-2 md:px-8 lg:px-16 max-w-300 m-auto">
                <HeroAlt />
                <CommisionInfo />
              </main>
              <Footer />
            </div>
          </div>
        );
}