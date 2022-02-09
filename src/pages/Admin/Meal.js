import React, { useContext, useState } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import CategoriesContext from "../../contexts/CategoriesContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const Meal = () => {
  <h1>Meal</h1>;
  const { products, setProducts } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false)

  // const index = params.category;

  const { register, reset, handleSubmit } = useForm({
    // defaultValues: index ? products[index] : {},
  });

  const submit = (data) => {
    const t = products;
    const obj = {
      productName: data.title,
      price: data.price,
      img: data.img,
      description: data.description,
    };
    const category = data.category;

    t[category].push(obj);
    setProducts(t);
    reset();
    setIsSubmit(true);
    setTimeout(() => {
        setIsSubmit(false)
    }, 1500)
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      {isSubmit && <div className="row w-100 myAlert justify-content-center">
                <div className="col-md-6 col-sm-8">
                <Alert severity="success">Maxsulot muvaffaqqiyatli qo'shildi!</Alert>
                </div>
                </div>}
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
        <div className="col-md-12 mb-3">
          <textarea
            className="form-control textArea w-100"
            placeholder="Tarif"
            type="number"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="col-md-6 mb-3">
          <input
            className="form-control w-100"
            placeholder="Narxi"
            type={"number"}
            {...register("price", { required: true })}
          ></input>
        </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-control w-100"
            placeholder="Mahsulot nomi"
            name="category"
            {...register("category", { required: true })}
          >
            {categories.map((item, i) => (
              <option key={i} className="p-2">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-center">
        <button className="btn styledBtn w-25 " type="submit">
          Saqlash
        </button>
      </div>
    </form>
  );
};

export default Meal;
