export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
          Студия маникюра в Дубае
        </p>
        <h1 className="font-serif text-5xl leading-tight text-foreground md:text-6xl">
          Руки, на которые хочется смотреть
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">
          Стойкий гель-лак, аккуратные формы и сложные дизайны любой
          сложности. Работаем в перчатках, стерилизуем инструменты после
          каждого клиента.
        </p>

        <a
          href="#booking"
          className="mt-10 inline-block rounded-full bg-raspberry px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-raspberry-dark"
        >
          Записаться на маникюр
        </a>
      </div>
    </section>
  );
}
