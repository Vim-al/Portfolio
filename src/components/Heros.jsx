import Wrapper from "../assets/wrappers/Hero";
import image from "../assets/hero.jpg";
const Heros = () => {
  return (
    <Wrapper>
      <div className="hero">
        <img src={image} alt="img" />
      </div>
    </Wrapper>
  );
};
export default Heros;
