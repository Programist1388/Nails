"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";

const serviceOptions = [
  "Маникюр + гель-лак",
  "Маникюр без покрытия",
  "Дизайн / французский маникюр",
  "Наращивание ногтей",
  "Педикюр + гель-лак",
  "SPA-уход за руками",
];

const masterOptions = ["Алина", "Камила", "Виктория", "Любой мастер"];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="bg-raspberry-light/30 py-20">
      <div className="mx-auto max-w-xl px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
              Запись
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Запишитесь на маникюр
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          {submitted ? (
            <div className="py-10 text-center">
              <p className="font-serif text-2xl text-raspberry-dark">
                Вы записаны! ✨
              </p>
              <p className="mt-2 text-sm text-foreground/60">
                Мы свяжемся с вами для подтверждения записи.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-raspberry underline underline-offset-4"
              >
                Записать ещё раз
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground/70">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="rounded-xl border border-raspberry-light bg-cream px-4 py-2.5 text-sm outline-none focus:border-raspberry"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-foreground/70">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+971 50 000 0000"
                  className="rounded-xl border border-raspberry-light bg-cream px-4 py-2.5 text-sm outline-none focus:border-raspberry"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="service" className="text-sm font-medium text-foreground/70">
                  Услуга
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="rounded-xl border border-raspberry-light bg-cream px-4 py-2.5 text-sm outline-none focus:border-raspberry"
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="master" className="text-sm font-medium text-foreground/70">
                  Мастер
                </label>
                <select
                  id="master"
                  name="master"
                  required
                  defaultValue=""
                  className="rounded-xl border border-raspberry-light bg-cream px-4 py-2.5 text-sm outline-none focus:border-raspberry"
                >
                  <option value="" disabled>
                    Выберите мастера
                  </option>
                  {masterOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <label htmlFor="date" className="text-sm font-medium text-foreground/70">
                    Дата
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="rounded-xl border border-raspberry-light bg-cream px-4 py-2.5 text-sm outline-none focus:border-raspberry"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="time" className="text-sm font-medium text-foreground/70">
                    Время
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="rounded-xl border border-raspberry-light bg-cream px-4 py-2.5 text-sm outline-none focus:border-raspberry"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full bg-raspberry px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-raspberry-dark"
              >
                Записаться ✨
              </button>
            </form>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
