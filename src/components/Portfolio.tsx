import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const works = [
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1690749138086-7422f71dc159?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1630843599725-32ead7671867?w=600&q=80&auto=format&fit=crop",
  "/portfolio/nude-ombre.jpg",
  "/portfolio/neon-orange.jpg",
  "/portfolio/tortoise-french.jpg",
  "/portfolio/yellow-leopard.webp",
  "/portfolio/black-butterfly.webp",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
              Портфолио
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Наши работы
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {works.map((src, i) => (
            <Reveal key={src} delay={i * 70}>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-lg">
                <Image
                  src={src}
                  alt={`Работа мастера ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
