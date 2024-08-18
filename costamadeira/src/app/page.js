import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lotificacion from './components/Lotificacion';
export default function Home() {

  const lotes = Array.from({ length: 81 }, (_, index) => ({
    numero: index + 1,
    vendido: Math.random() > 0.5,
  }));


  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="lotification">
         <Lotificacion lotes={lotes} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
