import { faPen, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SqButton from "../SqButton";
import CardWrapper from "./WrapperCard";

export default function Card({ img, title, price, edit, remove }) {
  return (
    <CardWrapper className="h-100 d-flex flex-column">
      <div className="img">
        <img src={img} alt="" className="img-fluid h-100" />
        <div className="img-overlay p-3">
          <SqButton color="warning me-3" onClick={edit}>
            <FontAwesomeIcon icon={faPencil} />
          </SqButton>
          <SqButton color="danger" onClick={remove}>
            <FontAwesomeIcon icon={faTrash} />
          </SqButton>
        </div>
      </div>
      <div className="p-3 text-center">
        <p className="title mt-4">{title}</p>
        <p className="price">${price}</p>
      </div>
    </CardWrapper>
  );
}
