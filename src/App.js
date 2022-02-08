import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./pages/Main";
import "./style/variables.scss";
import GlobalStyle from "./style/GlobalStyle";
import ProductsContext from "./contexts/ProductsContext";
import { useState } from "react";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState([
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/11/10-modern-lighting_modern-lighting-contemporary-table-lamp-lot75na-gllogrey22-light-design-louise-collection-brandvanegmond-471x421.jpg",
      title: "Modern Table Lamps 02",
      price: 200,
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table",
      price: 104.5,
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/11/10-modern-lighting_modern-lighting-contemporary-table-lamp-lot75na-gllogrey22-light-design-louise-collection-brandvanegmond-471x421.jpg",
      title: "Modern Table Lamps 02",
      price: 200,
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table",
      price: 104.5,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <GlobalStyle />
      <Header />
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
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
