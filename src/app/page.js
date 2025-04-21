import Image from "next/image";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Knowledges from "../../components/knowledges";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <About />*/}
      <Hero />
      <Knowledges /> 
      <Footer />
    </>
  );
}
