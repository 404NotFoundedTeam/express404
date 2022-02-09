import { faPen, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SqButton from "../SqButton";
import CardWrapper from "./WrapperCard";

export default function Card({ img, productName, price, remove }) {
  return (
    <CardWrapper className="h-100 d-flex flex-column">
      <div className="img">
        <img src={img} alt="" className="img-fluid h-100" />
        <div className="img-overlay p-3 text-right">
          <SqButton color="warning me-3" onClick={remove}>
            Qo'shish
          </SqButton>
        </div>
      </div>
      <div className="p-3 ">
        <p className="title mt-4">{productName}</p>
        <p className="price">${price}</p>
      </div>
    </CardWrapper>
  );
}
