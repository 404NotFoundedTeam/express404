import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./style/variables.scss";
import GlobalStyle from "./style/GlobalStyle";
import ProductsContext from "./contexts/ProductsContext";
import KorzinaContext from "./contexts/korzinaContext";
import { useState, useEffect } from "react";
import CategoriesContext from "./contexts/CategoriesContext";
import Admin from "./pages/Admin";
import Order from "./pages/Admin/Order";
import Add from "./pages/Admin/Add";
import Meal from "./pages/Admin/Meal";
import Done from "./pages/Admin/Done";
import Category from "./pages/Admin/Category";
import Korzina from "./pages/Kirzina";
import OrdersContext from "./contexts/OrdersContext";
import { getCategories, getProducts } from "./firebase/functions";
import UserContext from "./contexts/User";
import SignIn from "./Login/SignIn";
import Modal from "./components/Modal";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [userUid, setUserUid] = useState("");

  useEffect(() => {
    getCategories(setCategories);
    getProducts(setProducts);
  }, []);

  const [productsKorzina, setProductsKorzina] = useState([]);
  const [orders, setOrders] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <UserContext.Provider value={{ userUid, setUserUid }}>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <KorzinaContext.Provider
          value={{ productsKorzina, setProductsKorzina }}
        >
          <CategoriesContext.Provider value={{ categories, setCategories }}>
            <OrdersContext.Provider
              value={{ orders, setOrders, done, setDone }}
            >
                            <GlobalStyle />
              <BrowserRouter>
                <Routes>
                  <Route path="/*" element={<Main />}></Route>
                  <Route path="/korzina" element={<Korzina />} />
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
            </OrdersContext.Provider>
          </CategoriesContext.Provider>
        </KorzinaContext.Provider>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
