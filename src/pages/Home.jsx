import { Loaders, Namee, Navbarr, ScrollToTop } from "../components";
import image from "../assets/hero.jpg";
const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Loaders />
      <Navbarr />
      <Namee />
      <img src={image} alt="" />
    </div>
  );
};
export default Home;
