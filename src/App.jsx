import {
  Contact,
  Expert,
  Footer,
  Hero,
  HomePage,
  Marico,
  Navbar,
  Pupple,
  Share,
  Started,
} from "./components";

const App = () => {
  return (
    <div className="bg-[#000] w-full h-full text-white pb-[50px]">
      <Navbar />
      <div className="mt-[95px]">
        <Hero />
        <Marico />
        <HomePage />
        <Contact />
        <Share />
        <Expert />
        <Pupple />
        <Started />
        <Footer />
      </div>
    </div>
  );
};

export default App;
