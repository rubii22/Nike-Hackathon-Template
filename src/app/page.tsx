import Image from "next/image";
import Home from "./components/Home"; 
import BestOfAirMax from "./components/BestOfAirMax";
import FeaturedSection from "./components/FeaturedSection";
import ProductDisplay from "./components/GearUp";
import DontMiss from "./components/DontMiss"; 
import Essential from "./components/Essential";

export default function Page() { // Renamed the default function to "Page"
  return (
    <div>
      <Home /> {/* Rendering the Home component */}
      <BestOfAirMax />
      <FeaturedSection />
      <ProductDisplay />
      <DontMiss />
      <Essential />
    </div>
  );
}
