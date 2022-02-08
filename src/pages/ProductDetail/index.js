import React, { useContext } from "react";
import Title from "../../components/Title";
import Wrapper from "./ProductDetailWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SqButton from "../../components/SqButton";
import ProductsContext from "../../contexts/ProductsContext";
import Card from "../../components/Card";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail({ title }) {
  const { products, setProducts } = useContext(ProductsContext);

  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const index = params.id;

  const { register, reset, handleSubmit } = useForm({
    defaultValues: index ? products[index] : {},
  });

  const submit = (data) => {
    const t = [...products];

    if (index) {
      t[index] = data;
    } else {
      t.push(data);
    }

    setProducts(t);
    navigate("/");
  };

  return (
    <Wrapper className="text-center container">
      <Title title={title} />

      <form onSubmit={handleSubmit(submit)}>
        <div className="row mb-5">
          <div className="col-md-6 mb-3">
            <input
              className="form-control w-100"
              placeholder="Mahsulot rasmi"
              {...register("img", { required: true })}
            ></input>
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control w-100"
              placeholder="Mahsulot nomi"
              {...register("title", { required: true })}
            ></input>
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control w-100"
              placeholder="Mahsulot narxi"
              type="number"
              {...register("price", { required: true })}
            ></input>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-dark me-3 styledBtn">Ortga qaytish</button>
          <button className="btn btn-dark styledBtn" type="submit">
            Saqlash
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
