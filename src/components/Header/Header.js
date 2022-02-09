import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="row">
        <div className="col3">
          <img src="https://express24.uz/img/header-logo.svg" alt="express24" />
        </div>
        <div className="col-6">
          <form>
            <input type="text" className="form-control" placeholder="search" />
          </form>
        </div>
        <div className="col3">
          <div></div>
          <FontAwesomeIcon icon={faUser} />
          <button className="btn">Username</button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
