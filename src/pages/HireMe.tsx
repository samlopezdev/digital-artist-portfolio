import { Header } from "../components/Header";
import { HeroAlt } from "../components/HeroAlt";
import { Footer } from "../components/Footer"
import { CommissionForm } from "../components/hireme_page/CommissionForm";

export default function HireMe() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 max-w-300 m-auto">
          <HeroAlt
            titleStart="Let's Create Something "
            titleEnd="Ethereal"
            text="Transforming your ideas into ditital dreamscapes. Fill out the details below to start out collaborative journey."
          />
          <section className="flex gap-12 px-5 md:px-0">
            <div className="flex flex-col gap-5 w-1/3">
              <div className="relative aspect-square lg:aspect-8/9 bg-slate-200 rounded-lg 2xl:rounded-2xl transition-transform shadow-lg shadow-primary/20">
                <img
                  src="src/assets/images/fullmoon-fantasy.webp"
                  alt=""
                  className="object-cover w-full h-full rounded-lg 2xl:rounded-2xl"
                />
              </div>

              <div className="relative aspect-square lg:aspect-8/9 bg-slate-200 rounded-lg 2xl:rounded-2xl transition-transform shadow-lg shadow-primary/20">
                <img
                  src="src/assets/images/tropical-forest.webp"
                  alt=""
                  className="object-cover w-full h-full rounded-lg 2xl:rounded-2xl"
                />
              </div>

              <div className="relative aspect-square lg:aspect-8/9 bg-slate-200 rounded-lg 2xl:rounded-2xl transition-transform shadow-lg shadow-primary/20">
                <img
                  src="src/assets/images/love-at-first-sight.webp"
                  alt=""
                  className="object-cover w-full h-full rounded-lg 2xl:rounded-2xl"
                />
              </div>

              <div className="relative aspect-square lg:aspect-8/9 bg-slate-200 rounded-lg 2xl:rounded-2xl transition-transform shadow-lg shadow-primary/20">
                <img
                  src="src/assets/images/snowy-mountain.webp"
                  alt=""
                  className="object-cover w-full h-full rounded-lg 2xl:rounded-2xl"
                />
              </div>
            </div>

            <CommissionForm />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
