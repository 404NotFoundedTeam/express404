import styled from "styled-components";
import colors from "../../style/colors";

const CardWrapper = styled.div`
  .img {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    flex: 1;

    img {
      object-fit: cover;
    }

    .img-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(170, 170, 170, 0) 0%,
        rgba(0, 0, 0, 0.46) 100%
      );
      backdrop-filter: blur(3px);
      opacity: 0;
      transition: 0.3s;

      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    &:hover {
      .img-overlay {
        opacity: 1;
      }
    }
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    color: ${colors.dark};
  }

  .price {
    font-weight: 600;
    font-size: 22px;
    color: rgba(40, 42, 48, 0.3);
  }
`;

export default CardWrapper;
