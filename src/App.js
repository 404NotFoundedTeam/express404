import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./style/variables.scss";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/Header/Header";
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

function App() {
  const [categories, setCategories] = useState([
    "Foods",
    "Drinks",
    "Salats",
    "Fruits",
    "Shashliklar",
  ]);
  console.log(categories);

  const [products, setProducts] = useState({
    Shashliklar: [
      {
        img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
        title: "Modern Table Lamps 01",
        price: 100,
        category: "Shashliklar",
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
    ],
    Drinks: [
      {
        img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
        title: "Modern Table Lamps 01",
        price: 100,
        category: "Shashliklar",
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
    ],
    Salats: [
      {
        img: "https://avatars.mds.yandex.net/i?id=043a3b4ec03a4ea8768d05caa7af13c2-3577053-images-thumbs&n=13",
        title: "Modern Table Lamps 01",
        price: 100,
        category: "Shashliklar",
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
    ],
    Fruits: [
      {
        img: "https://avatars.mds.yandex.net/i?id=c9acfe9453bb7142cc47938454dcf578-5878560-images-thumbs&n=13",
        title: "Modern Table Lamps 01",
        price: 100,
        category: "Shashliklar",
      },
      {
        img: "https://brandvanegmond.com/wp-content/uploads/2018/12/modern-table-lamps-contemporary-lighting-arthur-collection-art30n-brandvanegmond-471x575.jpg",
        title: "Modern Table Lamps 01",
        price: 100,
        category: "Shashliklar",
      },
      {
        img: "https://avatars.mds.yandex.net/i?id=c9acfe9453bb7142cc47938454dcf578-5878560-images-thumbs&n=13",
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
    ],
  });

  const [productsKorzina, setProductsKorzina] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <KorzinaContext.Provider value={{ productsKorzina, setProductsKorzina }}>
        <CategoriesContext.Provider value={{ categories, setCategories }}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
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
