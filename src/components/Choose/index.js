import styled from "styled-components";
import { Button, ButtonGroup } from "@mui/material";

const Choose = ({ data, addProductToKorzina, changeSoni, setOpen }) => (
  <ChooseWrapper>
    <div className="chooseProduct row bg-white py-3 rounded shadow">
      <div className="col-sm-6">
        <img className="img-fluid w-100" src={data.img} alt={data.name} />
      </div>
      <div className="col-sm-6 d-flex flex-column justify-content-between">
        <div className="content">
          <h3>{data.name}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="actions text-center">
          <div className="d-flex justify-content-between aligin-items-center">
            <h4>{data.price * data.soni} sum</h4>
            <div className="btn-group">
              <ButtonGroup
                color={"warning"}
                size="small"
                aria-label="small button group"
              >
                <Button
                  onClick={() => {
                    changeSoni(false);
                    console.log(data);
                  }}
                >
                  -
                </Button>
                <Button>{data.soni}</Button>
                <Button
                  onClick={() => {
                    changeSoni(true);
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <button
            className="styledBtn"
            onClick={() => {
              addProductToKorzina(data);
              setOpen(false);
            }}
          >
            Korzinaga qo'shish
          </button>
        </div>
      </div>
    </div>
  </ChooseWrapper>
);

const ChooseWrapper = styled.div`
  .styledBtn {
    margin-top: 30px;
    width: 100%;
  }
`;

export default Choose;
