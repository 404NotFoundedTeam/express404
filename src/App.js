import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./style/variables.scss";
import GlobalStyle from "./style/GlobalStyle";
import ProductsContext from "./contexts/ProductsContext";
import KorzinaContext from "./contexts/korzinaContext";
import { useState } from "react";
import CategoriesContext from "./contexts/CategoriesContext";
import Admin from "./pages/Admin";
import Order from "./pages/Admin/Order";
import Add from "./pages/Admin/Add";
import Meal from "./pages/Admin/Meal";
import Done from "./pages/Admin/Done";
import Category from "./pages/Admin/Category";
import Header from "./components/Header/Header";
import ProductDetail from "../src/pages/ProductDetail/index";
function App() {
  const [categories, setCategories] = useState([
    "Foods",
    "Drinks",
    "Salats",
    "Fruits",
  ]);
  const [products, setProducts] = useState([
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
      category: "Foods",
    },
    {
      img: "https://www.maliburumdrinks.com/contentassets/efa030a64fd5410ea821f4d3c5bd10f7/malibubaybreeze.png?impolicy=CocktailHero",
      title: "Malibu Bay Breeze",
      price: 200,
      category: "Drinks",
    },
    {
      img: "https://static.1000.menu/img/content/37230/salat-graciya_1564753184_1_max.jpg",
      title: "Салат Грация",
      price: 104.5,
      category: "Salats",
    },
    {
      img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
      title: "Modern Table Lamps 01",
      price: 100,
      category: "Fruits",
    },
  ]);

  const [productsKorzina, setProductsKorzina] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <KorzinaContext.Provider value={{ productsKorzina, setProductsKorzina }}>
        <CategoriesContext.Provider value={{ categories, setCategories }}>
          <GlobalStyle />
          {/* <Header /> */}
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
        </CategoriesContext.Provider>
      </KorzinaContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
