// FILES
import "./home.css";

// GLOBAL COMPONENTS
import {
  ChooseUs,
  HowItWorks,
  Subscribe,
  Footer,
  Navigation,
} from "../../components";

// LOCAL COMPONENTS
import { Hero, Features } from "./components";

const Home = () => {


  
  return (
    <>
      <Navigation />
      <div className="w-full min-h-screen">
        <div className="hero px-[60px] sm:px-[20px] bg-base relative">
          {/* PAGES */}
          <Hero />
        </div>

        {/* SECTIONS */}

        {/* WHY CHOOSE US */}
        <ChooseUs />
        {/* APP FEATURES */}
        <Features />
        {/* HOW IT WORKS */}
        <HowItWorks />
        {/* SUBSCRIBE TO NEWS LETTER */}
        <Subscribe />
        {/* FOOTER */}
        <Footer />

        {/* SECTIONS END HERE */}
      </div>
    </>
  );
};

export default Home;
