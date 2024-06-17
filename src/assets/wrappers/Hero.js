import styled from "styled-components";

const Wrapper = styled.section`
  .hero {
    position: relative;
    width: calc(100vw - 4em);
    height: 100%;
    margin: 0 auto;
    border-radius: 10px;
    border: 4px solid #1a1a1a;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Wrapper;
