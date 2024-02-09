// import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="About">
        <Parallax type="about" />
      </section> */}
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      {/* <section>
        <Services />
      </section> */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
