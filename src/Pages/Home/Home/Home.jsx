import { useEffect } from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Banner></Banner>
      </div>

      <div data-aos="fade-up">
        <Gallery></Gallery>
      </div>

      <div data-aos="fade-up">
        <ShopByCategory></ShopByCategory>
      </div>
    </div>
  );
};

export default Home;
