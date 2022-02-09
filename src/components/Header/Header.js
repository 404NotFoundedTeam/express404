import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper";

const Header = ({ ...props }) => {
  return (
    <HeaderWrapper className="pt-3">
      <div className="row">
        <div className="col-3">
          <div className="d-flex justify-content-start align-items-center">
            <img
              src="https://express24.uz/img/header-logo.svg"
              width="160px"
              alt="express24"
            />
          </div>
        </div>
        <div className="col-6 ps-5">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              {...props}
            />
          </form>
        </div>
        <div className="col-3">
          <Link className="btn" {...props} to="/admin">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Admin Panel
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
