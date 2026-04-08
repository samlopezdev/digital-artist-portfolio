import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroAlt } from "../components/HeroAlt";
import { MdAutoFixHigh } from "react-icons/md";

export default function About() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 max-w-300 m-auto">
          <HeroAlt
            titleStart={"Abo"}
            titleEnd={"ut Me"}
            text={"Discover more about the visionary behind the artwork"}
          />

          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 py-15">
            <div className="lg:col-span-5 bg-slate-200 rounded-xl shadow-lg shadow-primary/20">
              <img
                alt="Artist portrait."
                src="src/assets/images/aria-portrait.jpg"
                className="rounded-lg"
              />
            </div>

            <div className="bg-primary/10 rounded-xl p-8 lg:col-span-7">
              <h2 className="flex gap-3 text-4xl font-bold tracking-tight mb-8">
                Behind the Canvas <MdAutoFixHigh className="text-primary" />
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-[#322528]">
                Hi! I’m <span className="text-primary font-bold">Aria</span>, a
                digital dream-weaver and illustrator based in sunny Orange
                County, CA. I graduated from California State University,
                Fullerton, with a Bachelor of Fine Arts in Illustration, and
                I’ve spent the past 8+ years turning pixels and pen strokes into
                playful adventures. My art spans mobile games and the bookish
                world, from Young Adult to Contemporary Romance, bringing
                vibrant characters, magical landscapes, and quirky details to
                life!
              </p>
              <p className="text-lg leading-relaxed mb-8 text-[#322528]">
                When I’m not conjuring whimsical worlds on screen, you can
                usually find me hiking new trails with my dog, Hojo, getting
                lost in a book, or leveling up in a video game. I love
                collecting inspiration from everyday sparks of life and turning
                them into illustrations that make hearts smile. Currently, I
                freelance but am open to full-time in-house opportunities, and
                I’d love to hear about your project.{" "}
                <a
                  href="/contact"
                  className="text-primary font-bold hover:underline underline-offset-4"
                >
                  Contact me for more details
                </a>{" "}
                and let’s create something magical together!
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center gap-8  bg-primary/5 rounded-2xl md:rounded-4xl border border-primary/10 text-center w-full py-12 md:py-20 px-6 lg:px-20">
            <div className="flex flex-col gap-4 max-w-180 lg:max-w-160">
              <h2 className="text-slate-900 dark:text-slate-100 text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-pretty">
                Let's create something magical together!
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-normal leading-normal text text-pretty">
                I am currently available for freelance opportunities, custom
                commissions, and creative collaborations. Whether you have a
                specific project in mind or just want to say hello, I'd love to
                hear from you!
              </p>
            </div>
            <button className="flex min-w-50 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-transform">
              View Gallery
            </button>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
