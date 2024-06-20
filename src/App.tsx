import ConvertTool from "./components/ComvertTool";
import GalleryTool from "./components/GalleryTool";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>

      <section id="convert-tool">
        <ConvertTool />
      </section>

      <section id="generate-pg2">
        <GalleryTool />
      </section>
    </>
  );
};

export default App;
