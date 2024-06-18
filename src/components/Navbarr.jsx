import Wrapper from "../assets/wrappers/Navbar";

const Navbarr = () => {
  return (
    <Wrapper>
      <div className="container">
        <nav>
          <div className="logo">
            <h3>Vimal Biyyapu</h3>
          </div>

          <div className="locations">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Certifications</a>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Navbarr;
