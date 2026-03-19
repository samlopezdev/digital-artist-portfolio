type ImageProps = {
  name: string;
  src: string;
  description: string;
};

export const Image = ({ name, src, description }: ImageProps) => (
  <a
    href="#"
    className="relative aspect-square lg:aspect-8/9 bg-slate-200 rounded-xl transition-transform shadow-lg shadow-primary/20 hover:scale-105 lg:hover:rotate-2"
    title={name}
  >
    <img
      src={src}
      alt={description}
      className="object-cover w-full h-full rounded-xl"
    />
  </a>
);
