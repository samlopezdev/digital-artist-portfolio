export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-0 lg:justify-around lg:flex-row py-12">
      <div className="relative lg:aspect-square bg-slate-200 rounded-xl shadow-lg shadow-primary/20 lg:w-1/3">
        <img
          src="src\assets\images\flower-girl.webp"
          alt="Young girl picking flowers in a field."
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col items-center-safe lg:items-start gap-4 text-center lg:text-left">
        <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
          Where Digital
          <br /> Dreams <span className="text-primary">Bloom</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal text-balance leading-relaxed max-w-150">
          Digital Artist &amp; Illustrator specializing in ethereal landscapes,
          character design, and pastel dreamscapes that bridge the gap between
          reality and fantasy.
        </p>

        <div className="flex gap-4">
          <button className="flex min-w-35 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-103 active:scale-95 shadow-lg shadow-primary/20">
            View Gallery
          </button>
          <button className="flex min-w-35 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary/10 text-primary text-base font-bold transition-colors hover:bg-primary/20">
            <a href="/about">About Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};
