import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/about';
import WhyChooseUs from './components/why-choose-us';
import Contact from './components/contact';import Footer from './components/footer';
import FAQ from './components/faq';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
