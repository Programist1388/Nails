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
              Оттенок сезона: <span className="text-raspberry-dark">{active}</span>
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
        </div>
      </div>
    </section>
  );
}
