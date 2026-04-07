import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroAlt } from "../components/HeroAlt";

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

            <section className="bg-primary/10 flex gap-4 p-4 rounded-2xl">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">
                  Behind the Art
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Hi! I’m Sally, a digital dream-weaver and illustrator based in
                  sunny Orange County, CA. I graduated from California State
                  University, Fullerton, with a Bachelor of Fine Arts in
                  Illustration, and I’ve spent the past 8+ years turning pixels
                  and pen strokes into playful adventures. My art spans mobile
                  games and the bookish world—from Young Adult to Contemporary
                  Romance—bringing vibrant characters, magical landscapes, and
                  quirky details to life. Every piece is a little adventure
                  waiting to happen, blending the familiar with the fantastical
                  and inviting viewers to dream bigger.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  When I’m not conjuring whimsical worlds on screen, you can
                  usually find me hiking new trails with my dog, Mickey, getting
                  lost in a book, or leveling up in a video game. I love
                  collecting inspiration from everyday sparks of life and
                  turning them into illustrations that make hearts smile. I
                  currently freelance but am open to full-time in-house
                  opportunities, and I’d love to hear about your project—drop me
                  a line at [sallyppham@gmail.com ], and let’s create something
                  magical together!
                </p>
              </div>
              <div>
                <img
                  src="src/assets/images/aria-portrait.jpg"
                  className="w-full h-full rounded-4xl"
                />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    );
}