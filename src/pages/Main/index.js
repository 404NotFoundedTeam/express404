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
import KorzinaContext from "../../contexts/korzinaContext";
import Header from "../../components/Header/Header";
import KorzinaMini from "../../components/KorzinaMini/KorzinaMini";
import Choose from "../../components/Choose";
import Modal from "../../components/Modal";
import Footer from "../../components/footer/Footer";

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

  useEffect(() => {
    let sum = 0;
    productsKorzina.map((item, i) => {
      sum += item.soni * item.price;
    });
    const obj = {
      price: sum,
      soni: productsKorzina.length,
    };
    setKorzinaMiniData(obj);
  }, [productsKorzina]);
  const addProductToKorzina = (obj) => {
    setProductsKorzina((data) => [...data, obj]);
  };
  const addChoose = (data) => {
    console.log("ADDDD", data);
    setChooseProduct(data);
    setOpen(true);
  };

  console.log(products);
  const newArr = Object.entries(products);

  return (
    <Wrapper className="text-center container">
      {productsKorzina.length > 0 && (
        <KorzinaMini {...korzinaMiniData} click={() => navigate("korzina")} />
      )}
      <Modal open={open} setOpen={setOpen}>
        <Choose
          data={chooseProduct}
          addProductToKorzina={addProductToKorzina}
          changeSoni={changeSoni}
          setOpen={setOpen}
        />
      </Modal>
      <Wrapper className="text-center container-fluid">
        <Header onChange={(e) => console.log(e.target.value)} />
        <main className="mt-4">
          <img
            src="/images/express.png"
            className="image-fluid"
            alt="express"
          />
        </main>
        <div className="category d-flex align-items-center mt-5 container ">
          {/* {products.map((category, index) => (
            <div className="px-4 py-3 rounded shadow mx-3">{category}</div>
          ))} */}
        </div>

        <div className="d-flex row">
          {newArr.map((item) => (
            <a className=" tabBtn col-md-2 me-3 mb-3" href={`#${item[0]}`}>
              {item[0][0].toLocaleUpperCase() + item[0].slice(1).toLowerCase()}
            </a>
          ))}
        </div>

        {newArr.map((mass, j) => {
          const ProductsValues = mass[1];
          const ProductsName = mass[0];
          return (
            <div className="row mt-5" key={j} id={ProductsName}>
              <h2 className="mb-3 text-start">
                {ProductsName[0].toLocaleUpperCase() +
                  ProductsName.slice(1).toLowerCase()}
              </h2>

              {ProductsValues.map((item, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                  <Card
                    {...item}
                    key={index}
                    remove={() =>
                      addChoose({
                        price: item.price,
                        soni: 1,
                        img: item.img,
                        name: item.productName,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          );
        })}
      </Wrapper>
      <Footer />
    </Wrapper>
  );
}
