export const AdditionalNotes = () => {
    return (
      <section className="w-full bg-white/40 border border-primary/10 rounded-3xl p-10 text-center backdrop-blur-sm">
        <h2 className="text-xl font-bold font-headline mb-4 uppercase tracking-[0.2em] text-slate-500">
          Additional <span className="text-primary">Notes</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed italic">
          All commissions are for personal use unless commercial licensing is
          purchased. Turnaround times vary per piece (usually 2-6 weeks). I
          reserve the right to share the final work in my portfolio unless
          privacy is requested.
        </p>
        <a href="/contact" className="mt-10 inline-block">
          <button className="cursor-pointer bg-primary text-white h-14 px-12 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
            Apply for Commission
          </button>
        </a>
      </section>
    );
}