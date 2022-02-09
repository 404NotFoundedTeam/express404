import React, { useContext } from "react";
import CategoriesContext from "../../contexts/CategoriesContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const { categories, setCategories } = useContext(CategoriesContext);

  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm({
    // defaultValues: index ? products[index] : {},
  });

  const submit = (data) => {
    const t = [...categories];
    console.log(data.category);
    console.log(categories);
    t.push(data.category);
    // console.log(t);
    setCategories(t);
    console.log(categories);
    reset();
    navigate("/admin");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="row mb-5">
          <div className="col-md-10 mb-3">
            <input
              className="form-control w-100"
              placeholder="Kategoriya nomi"
              {...register("category", { required: true })}
            ></input>
          </div>
        </div>
        <div className="text-center">
          <button className="btn styledBtn" type="submit">
            Saqlash
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
