import { faBars, faCheck, faPlus, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdminWrapper from "./AdminWrapper";

const Admin = () => {
  const location = useLocation();
  const { pathname } = location;
  const active = pathname.split('/');
  function toggleAside() {
    document.querySelector('#admin-aside').classList.toggle('d-none');
  }
  return (
    <AdminWrapper className="d-flex border">
      <aside id="admin-aside">
        <img src="https://express24.uz/img/header-logo.svg" alt="" />
        <ul className="list-unstyled">
          <li>
            <Link className={`admin-link ${active.slice(-1) == 'order' ? 'active' : ''}`} to="order">
              <FontAwesomeIcon className="admin-list-icon" icon={faSpinner} />
              <div>
                <p className="m-0 admin-list-title">Arizalar</p>
                <p className="m-0 admin-list-subtitle">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className={`admin-link ${active.slice(-1) == 'done' ? 'active' : ''}`} to="done">
              <FontAwesomeIcon className="admin-list-icon" icon={faCheck} />
              <div>
                <p className="m-0 admin-list-title">Yetkazilgan</p>
                <p className="m-0 admin-list-subtitle">Yetkazilgan taomlar ro’yxati bilan tanishing</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className={`admin-link ${active.slice(-1) == 'add' ? 'active' : ''}`} to="add">
              <FontAwesomeIcon className="admin-list-icon" icon={faPlus} />
              <div>
                <p className="m-0 admin-list-title">Qo’shish</p>
                <p className="m-0 admin-list-subtitle">Yangi kategoriya/taom qo’shish</p>
              </div>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="position-relative">
        <header className="d-flex shadow-sm align-items-center justify-content-between text-secondary">
          <FontAwesomeIcon className="header-icons" onClick={toggleAside} icon={faBars} />
          <FontAwesomeIcon className="header-icons" icon={faUser} />
        </header>
        <section className="admin-main-content">
          <Outlet />
        </section>
      </main>
    </AdminWrapper>
  );
}

export default Admin;