import React, { useContext } from "react";
import Title from "../../components/Title";
import Wrapper from "./MainWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SqButton from "../../components/SqButton";
import ProductsContext from "../../contexts/ProductsContext";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const { products, setProducts } = useContext(ProductsContext);

  const remove = (index) => {
    const t = [...products];
    t.splice(index, 1);
    setProducts(t);
  };

  console.log(products, setProducts);
  const navigate = useNavigate();

  return (
    <Wrapper className="text-center container">
      <Title title="Mahsulotlar" />
      <SqButton color="danger" onClick={() => navigate("add")}>
        <FontAwesomeIcon icon={faPlus} />
      </SqButton>

      <div className="row mt-5">
        {products.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card
              {...item}
              edit={() => navigate(`edit/${index}`)}
              remove={() => remove(index)}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
