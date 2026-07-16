import { Reveal } from "@/components/Reveal";

const services = [
  {
    name: "Маникюр + гель-лак",
    price: "150 AED",
    duration: "~90 мин",
  },
  {
    name: "Маникюр без покрытия",
    price: "80 AED",
    duration: "~45 мин",
  },
  {
    name: "Дизайн / французский маникюр",
    price: "от 30 AED",
    duration: "+20–40 мин",
  },
  {
    name: "Наращивание ногтей",
    price: "240 AED",
    duration: "~150 мин",
  },
  {
    name: "Педикюр + гель-лак",
    price: "180 AED",
    duration: "~90 мин",
  },
  {
    name: "SPA-уход за руками",
    price: "60 AED",
    duration: "~30 мин",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
              Услуги и цены
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Выберите свой уход
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-raspberry-light bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div>
                  <h3 className="font-serif text-lg text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/60">
                    {service.duration}
                  </p>
                </div>
                <p className="mt-6 text-2xl font-semibold text-raspberry-dark">
                  {service.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
