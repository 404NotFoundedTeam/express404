import React, { useContext, useState, useEffect } from "react";
import Title from "../../components/Title";
import Wrapper from "./MainWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SqButton from "../../components/SqButton";
import ProductsContext from "../../contexts/ProductsContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import KorzinaContext from "../../contexts/korzinaContext";

// import express from "../../../public/images/express.png";

export default function Main() {
  const { products, setProducts } = useContext(ProductsContext);
  const { categories, setCategories } = useContext(CategoriesContext);
  const { productsKorzina, setProductsKorzina } = useContext(KorzinaContext);
  const [korzinaMiniData, setKorzinaMiniData] = useState({});
  const [open, setOpen] = useState(false);
  const [chooseProduct, setChooseProduct] = useState({});
  const [kerak, setKerak] = useState(false);
  const navigate = useNavigate();

  const remove = (index) => {
    const t = [...products];
    t.splice(index, 1);
    setProducts(t);
  };
  const changeSoni = (isPlus) => {
    const obj = chooseProduct;
    if (isPlus) {
      obj.soni = chooseProduct.soni + 1;
    } else {
      if (chooseProduct.soni === 1) return;
      obj.soni = chooseProduct.soni - 1;
    }
    setChooseProduct(obj);
    setKerak((ref) => !ref);
  };

  // useEffect(() => {
  //   let sum = 0;
  //   productsKorzina.map((item, i) => {
  //     sum += item.soni * item.price;
  //   });
  //   const obj = {
  //     price: sum,
  //     soni: productsKorzina.length,
  //   };
  //   setKorzinaMiniData(obj);
  // }, [productsKorzina]);
  const addProductToKorzina = (obj) => {
    setProductsKorzina((data) => [...data, obj]);
  };
  const addChoose = (data) => {
    setChooseProduct(data);
    setOpen(true);
  };

  return (
    <Wrapper className="text-center container-fluid">
      <Header />
      <main className="mt-4">
        <img src="/images/express.png" className="image-fluid" alt="express" />
      </main>
      <div className="category d-flex align-items-center mt-5 container ">
        {categories.map((categories) => (
          <div className="px-4 py-3 rounded shadow mx-3">{categories}</div>
        ))}
      </div>
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
              remove={() =>
                addChoose({
                  price: item.price,
                  soni: 1,
                  img: item.img,
                  name: item.name,
                })
              }
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
