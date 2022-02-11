import { faArrowLeft, faArrowRight, faArrowRightFromBracket, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import KorzinaContext from "../../contexts/korzinaContext";
import { useNavigate, Controller } from "react-router-dom";
import OrdersContext from "../../contexts/OrdersContext";
import userData from "../../Data/userData";
import Header from "../../components/Header/Header";

const KorzinaWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  .styledBtn {
    width: 90% !important;
    display: inline-block;
  }
  .img-box {
    flex: 1;
    border-radius: 15px;
    position: relative;
    span {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      width: 40px;
      height: 30px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: red;
      color: #fff;
    }
    img {
      width: 100%;
      height: 150px;
      border-radius: 15px;
      object-fit: cover;
    }
  }
  .korzina-footer {
    width: 100%;
  }
  .bodyKor {
    flex: 1;
    overflow-y: auto;
  }
  .product{
    border-bottom: 2px solid #f1f1f1;
    .name{
      text-transform: capitalize;
    }
  }
  form{
    label{
      margin-bottom: 20px;
      display: block;
    }
    textarea{
      width: 100%;
      border: 2px solid #f1f1f1;
      padding: 10px;
      font-size: 18px;
      height: 200px;
      outline: none;
      resize: none;
    }
  }
`;

const Korzina = () => {
  const navigate = useNavigate();

  const [sum, setSum] = useState(0);
  const { productsKorzina, setProductsKorzina } = useContext(KorzinaContext);
  const { orders, setOrders } = useContext(OrdersContext);
  const [comment, setComment] = useState("");  
    const submitOrder = () => {
        const order = {
            "To'liq ismi": userData.fullName,
            "Taomlar": {
            },
            "Izoh": comment,
            "Telefon raqami": userData.phone,
            "summasi": sum,
        }
        productsKorzina.map(item => order['Taomlar'][item.name] = item.soni) 

        setOrders((data) => [...data, order])
        alert("Zakaz qabul qilindi!")
        navigate("../")  
        setProductsKorzina([]);
    }

  const changeSoni = (isPlus, index) => {
    setProductsKorzina((data) => {
      const t = [...data];
      if (isPlus) t[index].soni += 1;
      else if (t[index].soni > 1) {
        t[index].soni -= 1;
      }
      return t;
    });
  };

  const deletePro = (index) => {
    setProductsKorzina((data) => {
      const t = [...data];
      t.splice(index, 1);
      return t;
    });
    // setKerak((ref) => !ref);
  };

  useEffect(() => {
    let summa = 0;
    productsKorzina.map((item, i) => {
      summa += item.soni * item.price;
    });
    setSum(summa);
  }, [productsKorzina]);

  return (
    <KorzinaWrapper>
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-between">
            <h3 style={{fontWeight: "700"}} className={"fv-bold me-2 mb-0"}>Sizning Korzinangiz</h3>
            <IconButton onClick={() => navigate("../")}><FontAwesomeIcon icon={faArrowRightFromBracket} /></IconButton>
        </div>
        <div className="bodyKor row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="products py-5">
              {productsKorzina.map((item, i) => (
                <div
                  key={item.name + i}
                  className="product p-3 rounder row w-100 align-items-center mb-4"
                >
                  <div className="d-flex col-md-5 col-sm-6 col-lg-4 align-items-center">
                    <IconButton
                      onClick={() => {
                        deletePro(i);
                      }}
                      variant={"contained"}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                    <div className="img-box ms-2">
                      <span className="soni">{item.soni}</span>
                      <img src={item.img} alt={item.name} />
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-6 col-lg-8 d-flex justify-content-between align-items-center">
                    <div className="product-info">
                      <h5 className="name">{item.name}</h5>
                      <h4 className="summa">{item.price} sum</h4>
                    </div>
                    <div className="btns">
                      <ButtonGroup
                        color={"warning"}
                        size="small"
                        aria-label="small button group"
                      >
                        <Button
                          onClick={() => {
                            changeSoni(false, i);
                          }}
                        >
                          -
                        </Button>
                        <Button>{item.soni}</Button>
                        <Button
                          onClick={() => {
                            changeSoni(true, i);
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form>
              <label for={"comment"}>Buyurtma uchun izox: </label>
              <textarea onChange={(e) => {
                setComment(e.target.value)
              }} id='comment' className="rounded"></textarea>
            </form>
          </div>
        </div>



        <div className="korzina-footer p-3 rounded bordered row justify-content-center">
          <div className="col-md-6 col-sm-8 col-11 col-xxl-4">
            <h4>Total: </h4>
            <div className="d-flex align-items-center justify-content-between w-100 py-3">
              <p>Jami summa: </p>
              <p>{sum} sum</p>
            </div>
            <div className="d-flex justify-content-center w-100 py-4">
              <button
                disabled={productsKorzina.length <= 0}
                className="styledBtn"
                onClick={submitOrder}
              >
                Buyurtma qilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </KorzinaWrapper>
  );
};

export default Korzina;
