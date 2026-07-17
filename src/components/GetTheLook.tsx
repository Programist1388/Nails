"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const looks = [
  {
    title: "Дымка над городом",
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80&auto=format&fit=crop",
    colors: [
      { name: "Дымчатый лавандовый", hex: "#9b96a8", top: "34%", left: "40%" },
      { name: "Молочный", hex: "#f2eee7", top: "55%", left: "46%" },
      { name: "Серебряный иней", hex: "#c9c3ba", top: "70%", left: "45%" },
      { name: "Графитовый серый", hex: "#7c7871", top: "78%", left: "56%" },
    ],
  },
  {
    title: "Готика в деталях",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80&auto=format&fit=crop",
    colors: [
      { name: "Чёрный лак", hex: "#161616", top: "44%", left: "59%" },
      { name: "Черепаховый узор", hex: "#7a4a24", top: "60%", left: "68%" },
    ],
  },
  {
    title: "Алая история любви",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&q=80&auto=format&fit=crop",
    colors: [
      { name: "Вишнёвый глянец", hex: "#a3123a", top: "53%", left: "41%" },
      { name: "Белая роспись", hex: "#faf7f2", top: "59%", left: "57%" },
      { name: "Нюдовый беж", hex: "#e6c3ad", top: "48%", left: "21%" },
    ],
  },
  {
    title: "Мраморный перламутр",
    image: "/looks/marble-pastel.jpg",
    colors: [
      { name: "Голубой мрамор", hex: "#a9c6dd", top: "38%", left: "33%" },
      { name: "Розовый кварц", hex: "#e3b7c9", top: "46%", left: "57%" },
      { name: "Сиреневая дымка", hex: "#b9a8d1", top: "89%", left: "38%" },
      { name: "Золотая нить", hex: "#c9a227", top: "50%", left: "75%" },
    ],
  },
];

export function GetTheLook() {
  const [lookIndex, setLookIndex] = useState(0);
  const [active, setActive] = useState(looks[0].colors[0].name);
  const look = looks[lookIndex];

  function goTo(index: number) {
    const next = (index + looks.length) % looks.length;
    setLookIndex(next);
    setActive(looks[next].colors[0].name);
  }

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            {looks.map((l, i) => (
              <Image
                key={l.image}
                src={l.image}
                alt={l.title}
                fill
                loading="eager"
                sizes="(min-width: 768px) 480px, 100vw"
                className={`object-cover transition-opacity duration-300 ${
                  i === lookIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {look.colors.map((color) => (
              <div
                key={color.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: color.top, left: color.left }}
              >
                <span
                  className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-semibold text-raspberry-dark shadow-md transition-all duration-200 ${
                    active === color.name
                      ? "translate-y-0 opacity-100"
                      : "translate-y-1 opacity-0"
                  }`}
                >
                  {color.name}
                </span>

                <button
                  type="button"
                  aria-label={color.name}
                  onClick={() => setActive(color.name)}
                  className="group relative flex h-8 w-8 items-center justify-center"
                >
                  <span
                    className={`absolute h-5 w-5 rounded-full bg-white/70 ${
                      active === color.name ? "animate-ping" : ""
                    }`}
                  />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-white shadow transition-transform duration-200 group-hover:scale-150" />
                </button>
              </div>
            ))}

            <button
              type="button"
              aria-label="Предыдущий образ"
              onClick={() => goTo(lookIndex - 1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-raspberry-dark shadow-md backdrop-blur transition-all hover:bg-white hover:scale-110"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Следующий образ"
              onClick={() => goTo(lookIndex + 1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-raspberry-dark shadow-md backdrop-blur transition-all hover:bg-white hover:scale-110"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {looks.map((l, i) => (
                <button
                  key={l.title}
                  type="button"
                  aria-label={l.title}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === lookIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
              Образ дня
            </p>
            <h2 className="font-serif text-3xl leading-tight text-foreground transition-opacity duration-300 md:text-4xl">
              {look.title}
            </h2>

            <p className="mt-5 text-sm font-medium text-foreground/70">
              Оттенки в этом образе:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {look.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setActive(color.name)}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    active === color.name
                      ? "border-raspberry bg-raspberry-light/40"
                      : "border-raspberry-light/60"
                  }`}
                >
                  <span
                    className="h-8 w-8 shrink-0 rounded-full border border-black/10"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs font-medium text-foreground/80">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>

            <a
              href="#booking"
              className="mt-8 inline-block rounded-full bg-raspberry px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-raspberry-dark"
            >
              Записаться на такой маникюр
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
