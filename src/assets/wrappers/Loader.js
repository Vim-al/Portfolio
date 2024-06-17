import styled from "styled-components";

const Wrapper = styled.section`
  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    display: flex;
  }

  .bar {
    width: 10vw;
    height: 105vh;
    background: #1a1a1a;
  }

  .counter {
    position: fixed;
    color: #bcbcc4;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.2em 0.4em;
    font-size: 20vw;
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
  }
`;

export default Wrapper;
