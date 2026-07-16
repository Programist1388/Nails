import Image from "next/image";

const posts = [
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80&auto=format&fit=crop",
    colors: ["#e0559f", "#f2a6c9"],
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80&auto=format&fit=crop",
    colors: ["#161616", "#5c4326"],
  },
];

export function Community() {
  return (
    <section className="bg-raspberry-light/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-raspberry">
          Отмечайте нас
        </p>
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          Из сообщества
        </h2>
        <p className="mt-4 max-w-md text-sm text-foreground/70">
          Показывайте свой маникюр — отмечайте студию в Instagram с тегом{" "}
          <span className="font-semibold text-raspberry-dark">
            #anastasianails
          </span>
          , а мы соберём лучшие работы здесь.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <div key={post.src}>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={post.src}
                  alt="Работа из сообщества"
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                {post.colors.map((hex) => (
                  <span
                    key={hex}
                    className="h-3 w-3 rounded-full border border-black/10"
                    style={{ backgroundColor: hex }}
                  />
                ))}
                <span className="text-xs text-foreground/50">
                  Похожие оттенки →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
