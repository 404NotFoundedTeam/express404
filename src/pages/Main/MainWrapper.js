import styled from "styled-components";

const Wrapper = styled.div`
  main {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .tabBtn {
    background: rgb(240, 240, 240);
    padding: 8px 16px;
    border-radius: 10px;
    transition: all 0.25s ease-in 0s;
    text-decoration: none;
    color: black;
    &:hover {
      background: #ffec00;
    }
  }
`;

export default Wrapper;
