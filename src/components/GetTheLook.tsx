"use client";

import Image from "next/image";
import { useState } from "react";

const colors = [
  {
    name: "Дымчатый лавандовый",
    hex: "#9b96a8",
    top: "34%",
    left: "40%",
  },
  {
    name: "Молочный",
    hex: "#f2eee7",
    top: "55%",
    left: "46%",
  },
  {
    name: "Серебряный иней",
    hex: "#c9c3ba",
    top: "70%",
    left: "45%",
  },
  {
    name: "Графитовый серый",
    hex: "#7c7871",
    top: "80%",
    left: "68%",
  },
];

export function GetTheLook() {
  const [active, setActive] = useState(colors[0].name);

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80&auto=format&fit=crop"
            alt="Готовый образ маникюра"
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />

          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              aria-label={color.name}
              onClick={() => setActive(color.name)}
              className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ top: color.top, left: color.left }}
            >
              <span
                className={`absolute h-5 w-5 rounded-full bg-white/70 ${
                  active === color.name ? "animate-ping" : ""
                }`}
              />
              <span className="relative h-2.5 w-2.5 rounded-full bg-white shadow" />
            </button>
          ))}
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
            Образ дня
          </p>
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Дымка над городом
          </h2>

          <p className="mt-5 text-sm font-medium text-foreground/70">
            Оттенки в этом образе:
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setActive(color.name)}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
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
      </div>
    </section>
  );
}
