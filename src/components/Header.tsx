import Link from "next/link";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Работы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-raspberry-light/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="font-serif text-2xl tracking-wide text-raspberry-dark"
        >
          Anastasia
        </Link>

        <nav className="hidden gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:text-raspberry-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="rounded-full bg-raspberry px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-raspberry-dark"
        >
          Записаться
        </a>
      </div>
    </header>
  );
}
