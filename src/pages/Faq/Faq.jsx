import "./Faq.css";

// DATA
import FaqList from "./data";

// GLOBAL COMPONENTS
import { HowItWorks, Subscribe, Footer, Navigation } from "../../components";

// LOCAL COMPONENTS
import { Accordion } from "./components";

const Faq = () => {
  return (
    <>
      <Navigation />
      <section className="sm:mt-[10vh]">
        <div className="py-[125px] sm:py-[75px] relative bg-primary text-center font-ui-semi text-white">
          <div className="overlay absolute"></div>
          <h1 className="text-[40px] sm:text-[24px] font-ui-semi">
            Frequently Asked Questions (FAQs)
          </h1>
        </div>
        <div className="py-[50px] px-[300px] lg:px-[100px] sm:px-5 bg-white flex flex-col gap-5">
          {FaqList.map(({ question, answer }, index) => (
            <Accordion
              question={question}
              answer={answer}
              key={index + question}
            />
          ))}
        </div>
      </section>
      {/* HOW IT WORKS */}
      <HowItWorks />
      {/* SUBCSCRIBE TO OUR NEWS LETTER */}
      <Subscribe />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Faq;
