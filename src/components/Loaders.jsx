import { useRef, useEffect } from "react";
import Wrapper from "../assets/wrappers/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loaders = () => {
  const counterRef = useRef();
  const barContainerRef = useRef();
  useEffect(() => {
    const startLoader = () => {
      let counterElement = counterRef.current;
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue === 100) {
          return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      };

      updateCounter();
    };
    startLoader();
  }, []);

  useGSAP(() => {
    gsap.to(counterRef.current, 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(
      ".bar",
      1.5,
      {
        delay: 3.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      },
      { scope: barContainerRef }
    );
  });

  return (
    <Wrapper>
      <h1 ref={counterRef} className="counter">
        0
      </h1>
      <div ref={barContainerRef} className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </Wrapper>
  );
};
export default Loaders;
