import Navigation from "@/app/Components/Navigation";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Components/Footer";
const page = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <Services></Services>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </div>
  );
};

export default page;
