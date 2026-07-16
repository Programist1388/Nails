import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Masters } from "@/components/Masters";
import { GetTheLook } from "@/components/GetTheLook";
import { Portfolio } from "@/components/Portfolio";
import { Community } from "@/components/Community";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Masters />
        <GetTheLook />
        <Portfolio />
        <Community />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
