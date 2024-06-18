import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }

  nav div {
    display: flex;
    padding: 1em;
    gap: 1em;
  }

  nav div a {
    text-decoration: none;
    color: #000;
    font-family: "Neue Montreal"; //not working ig
  }

  .logo {
    font-family: "Major Mono Display", monospace;
  }
`;
export default Wrapper;
