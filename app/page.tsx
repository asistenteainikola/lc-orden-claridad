import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identidad from "@/components/Identidad";
import Servicios from "@/components/Servicios";
import Metodo from "@/components/Metodo";
import ClienteIdeal from "@/components/ClienteIdeal";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Identidad />
        <Servicios />
        <Metodo />
        <ClienteIdeal />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
