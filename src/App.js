import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./pages/Main";
import "./style/variables.scss";
import GlobalStyle from "./style/GlobalStyle";
import ProductsContext from "./contexts/ProductsContext";
import { useState } from "react";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Order from "./pages/Admin/Order";
import Add from "./pages/Admin/Add";
import Meal from "./pages/Admin/Meal";
import Done from "./pages/Admin/Done";
import Category from "./pages/Admin/Category";

function App() {
  const [products, setProducts] = useState([
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
      category: "Shashliklar",
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/11/10-modern-lighting_modern-lighting-contemporary-table-lamp-lot75na-gllogrey22-light-design-louise-collection-brandvanegmond-471x421.jpg",
      title: "Modern Table Lamps 02",
      price: 200,
      category: "Lagmon",
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table",
      price: 104.5,
      category: "Shorva",
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
      category: "Shashliklar",
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/11/10-modern-lighting_modern-lighting-contemporary-table-lamp-lot75na-gllogrey22-light-design-louise-collection-brandvanegmond-471x421.jpg",
      title: "Modern Table Lamps 02",
      price: 200,
      category: "Shashliklar",
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table",
      price: 104.5,
      category: "Shashliklar",
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/add"
            element={<ProductDetail title={"Qo'shish"} />}
          ></Route>
          <Route
            path="/edit/:id"
            element={<ProductDetail title={"O'zgartirish"} />}
          ></Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="add" element={<Add />}>
              <Route path="meal" element={<Meal />} />
              <Route path="category" element={<Category />} />
            </Route>
            <Route path="order" element={<Order />} />
            <Route path="done" element={<Done />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
