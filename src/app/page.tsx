import Navbar from "../components/Navbar";
import CitiesSection from "../features/cities/sections/CitiesSection";
import FreshSpaceSection from "../features/offices/sections/FreshSpaceSection";
import BenefitSection from "../components/BenefitSection";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />

      <CitiesSection />

      <BenefitSection />

      <FreshSpaceSection />
    </>
  );
}
