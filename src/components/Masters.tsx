import Image from "next/image";

const masters = [
  {
    name: "Алина",
    role: "Топ-мастер, сложные дизайны",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Камила",
    role: "Специалист по наращиванию",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Дарья",
    role: "Маникюр и педикюр",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80&auto=format&fit=crop",
  },
];

export function Masters() {
  return (
    <section id="masters" className="bg-raspberry-light/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
            Команда
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Наши мастера
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {masters.map((master) => (
            <div key={master.name} className="text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full shadow-md sm:w-full">
                <Image
                  src={master.photo}
                  alt={master.name}
                  fill
                  sizes="(min-width: 640px) 320px, 160px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">
                {master.name}
              </h3>
              <p className="mt-1 text-sm text-foreground/60">{master.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
