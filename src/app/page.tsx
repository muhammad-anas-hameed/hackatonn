import Hero from "./components/Hero";
import PopularCar from "./components/PopularCar";
import RecommendedCar from "./components/Recommendcar";

export default function Home() {
  return (
    <div>
      
       <Hero />
      <PopularCar/>
      {/* <hr className="to-gray-950"/> */}
      <RecommendedCar/> 
      
    </div>
  );
}

