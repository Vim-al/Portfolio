import Wrapper from "../assets/wrappers/Namee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
const Namee = () => {
  useGSAP(() => {
    gsap.from(".h1", 1.5, {
      delay: 4,
      y: -700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  });

  return (
    <Wrapper>
      <div className="header">
        <div className="h1">V</div>
        <div className="h1">I</div>
        <div className="h1">M</div>
        <div className="h1">A</div>
        <div className="h1">L</div>
      </div>
    </Wrapper>
  );
};
export default Namee;
