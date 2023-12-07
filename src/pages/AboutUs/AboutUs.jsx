// ASSETS
import mockup from "../../assets/device-mockup.png";

// COMPONENTS
import {
  ChooseUs,
  HowItWorks,
  Subscribe,
  Footer,
  Navigation,
} from "../../components";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <section className="sm:mt-[10vh] flex justify-between bg-[#FAFAFA] px-[60px] py-[100px] sm:py-[80px] gap-[80px] items-stretch md:flex-col sm:px-5">
        <div className="left flex-1">
          <h1 className="font-ui-bold text-[32px] mb-5 sm:text-center sm:text-[28px]">
            About <span className="text-primary">Us</span>
          </h1>
          <article className="text-[16px] text-body-text font-ui-regular sm:text-center">
            <p className="mb-5">
              Swiftsettle is a digital transaction platform that offers
              comprehensive protection against scams when conducting
              transactions with unfamiliar individuals. Our foundation rests on
              trust, and we take great satisfaction in ensuring peace of mind
              accompanies every transaction we handle.
            </p>
            <p>
              Swiftsettle offers a distinctive, adaptable, and affordable
              solution that seamlessly operates on all devices, including
              laptops, smartphones, and tablets, ensuring worry-free
              transactions.
            </p>
          </article>
        </div>
        <div className="flex-[1] self-center max-w-fit">
          <img src={mockup} alt="Mockup" className="max-w-[100%]" />
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <ChooseUs />
      {/* HOW IT WORKS */}
      <HowItWorks />
      {/* SUBSCRIBE */}
      <Subscribe />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AboutUs;
