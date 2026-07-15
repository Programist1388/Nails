"use client";

import Image from "next/image";
import { useState } from "react";

const themes = [
  { name: "Малиновый мусс", color: "#b23a5f" },
  { name: "Пудровый нюд", color: "#d9a5a0" },
  { name: "Терракота", color: "#c06a3d" },
  { name: "Марсала", color: "#6f2232" },
];

export function Hero() {
  const [active, setActive] = useState(themes[0].name);
  const activeColor = themes.find((theme) => theme.name === active)!.color;

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
            Студия маникюра в Дубае
          </p>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Руки, на которые хочется смотреть
          </h1>
          <p className="mt-5 max-w-md text-base text-foreground/70">
            Стойкий гель-лак, аккуратные формы и сложные дизайны любой
            сложности. Работаем в перчатках, стерилизуем инструменты после
            каждого клиента.
          </p>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-foreground/70">
              Оттенок сезона:{" "}
              <span
                className="font-semibold transition-colors duration-500"
                style={{ color: activeColor }}
              >
                {active}
              </span>
            </p>
            <div className="flex gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  type="button"
                  aria-label={theme.name}
                  onClick={() => setActive(theme.name)}
                  className="h-9 w-9 rounded-full ring-2 ring-offset-2 ring-offset-cream transition-transform hover:scale-110"
                  style={{
                    backgroundColor: theme.color,
                    boxShadow:
                      active === theme.name
                        ? `0 0 0 2px ${theme.color}`
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>

          <a
            href="#booking"
            className="mt-10 inline-block rounded-full bg-raspberry px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-raspberry-dark"
          >
            Записаться на маникюр
          </a>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=80&auto=format&fit=crop"
            alt="Маникюр гель-лак"
            fill
            priority
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />

          <div className="absolute bottom-5 left-5 flex items-end gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
            <NailSwatch color={activeColor} height={56} width={28} delay="0ms" />
            <NailSwatch color={activeColor} height={68} width={30} delay="60ms" />
            <NailSwatch color={activeColor} height={50} width={26} delay="120ms" />
            <div className="ml-2 pb-1">
              <p className="text-xs font-medium text-foreground/50">Превью</p>
              <p
                className="text-sm font-semibold transition-colors duration-500"
                style={{ color: activeColor }}
              >
                {active}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NailSwatch({
  color,
  width,
  height,
  delay,
}: {
  color: string;
  width: number;
  height: number;
  delay: string;
}) {
  return (
    <span
      className="block rounded-t-full rounded-b-md border border-black/5 shadow-sm transition-colors duration-500 ease-out"
      style={{
        backgroundColor: color,
        width,
        height,
        transitionDelay: delay,
      }}
    />
  );
}
