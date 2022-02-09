import styled from "styled-components";

const Wrapper = styled.span`
  .styledBtn {
    min-width: 150px;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-weight: 600;
    font-size: 20px;
    background-color: #ffec00;
  }
`;

export default function MyButton({ title }) {
  return (
    <Wrapper>
      <button className="styledBtn">{title}</button>
    </Wrapper>
  );
}
