import ConvertTool from "@/components/ComvertTool";
import GalleryTool from "@/components/GalleryTool";
import Hero from "@/components/Hero";

const App = () => {
  return (
    <>
      <section>
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
