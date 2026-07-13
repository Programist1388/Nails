export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-raspberry-dark py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl">MILÁN</p>
          <p className="mt-2 text-sm text-white/70">Студия маникюра</p>
        </div>

        <div className="text-sm text-white/80">
          <p>Dubai, Jumeirah Beach Road</p>
          <p className="mt-1">+971 50 000 0000</p>
        </div>

        <div className="text-sm text-white/80">
          <p>Ежедневно</p>
          <p className="mt-1">10:00–21:00</p>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-white/50">
        © {year} MILÁN Manicure Studio
      </p>
    </footer>
  );
}
