import { Outlet } from "react-router-dom";
import MyButton from "../../components/MainBtn/MainBtn";
import { NavLink } from "react-router-dom";

const Add = () => {
  return (
    <div className="pt-5">
      <h3 className="mt-3">Qo'shish</h3>
      <p className="text-secondary">Yangi kategoriya/taom qo’shish</p>
      <div className="mb-5 d-flex">
        <NavLink
          className="nav-link me-3"
          activeClassName="active"
          to="category"
        >
          Kategoriya
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="meal">
          Taom
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Add;
