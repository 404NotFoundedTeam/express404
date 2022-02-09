import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper className="pt-3">
      <div className="row">
        <div className="col-3">
          <img
            src="https://express24.uz/img/header-logo.svg"
            width="160px"
            alt="express24"
          />
        </div>
        <div className="col-6 ps-5">
          <form>
            <input type="text" className="form-control" placeholder="Search" />
          </form>
        </div>
        <div className="col-3">
          <button className="btn">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Username
          </button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
