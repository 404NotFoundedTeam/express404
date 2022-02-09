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
import Korzina from "./pages/Kirzina";
import OrdersContext from "./contexts/OrdersContext";

function App() {
  const [categories, setCategories] = useState([
    "baliqli taomlar",
    "garnirlar",
    "go'shtli ovqatlar",
    "ichimliklar" ,
    "keyingi taomlar",
    "ovqatlar",
    "salatlar" ,
    "shashliklar",
  ]);

  
  const [products, setProducts] = useState({
    "baliqli taomlar" : [
      {
        "desc" : "shirin",
        "img" : "https://avatars.mds.yandex.net/i?id=b48d9d165861bc7a7da5a8bfbe86b7af-4766454-images-thumbs&n=13",
        "price" : "89000",
        "productName" : "sazancha"
      },{
        "desc" : "baliqcha",
        "img" : "https://avatars.mds.yandex.net/i?id=843fc61848cc6804dc28a5aaff92d000-4011753-images-thumbs&n=13",
        "price" : "99000",
        "productName" : "zor baliq"
      },{
        "desc" : "zor baliq",
        "img" : "https://avatars.mds.yandex.net/i?id=aa8b65a7cbd2162bd5825b7fcb78f3b6-4135778-images-thumbs&n=13",
        "price" : "78000",
        "productName" : "baliqli baliq"
      },
      {
        "desc" : "baliqchali baliqlar",
        "img" : "https://avatars.mds.yandex.net/i?id=f56341073201e3ba027ba11ae3016a74-4642846-images-thumbs&n=13",
        "price" : "89000",
        "productName" : "baliqchali baliqlar"
      }
    ],
    "garnirlar" : [
      {
        "desc" : "zor ovqat",
        "img" : "https://avatars.mds.yandex.net/i?id=d662abc25e944181c1113a77eef8dc4f-5607772-images-thumbs&n=13",
        "price" : "50000",
        "productName" : "Taom"
      },
      {
        "desc" : "zor",
        "img" : "https://avatars.mds.yandex.net/i?id=ff26d2924d6c1798ad37d8b7309dc2b2-5333776-images-thumbs&n=13",
        "price" : "45000",
        "productName" : "zor ovqat"
      }, 
      {
        "desc" : "vorcher",
        "img" : "https://avatars.mds.yandex.net/i?id=6b46f3266c5a670e33f06d8766a64a45-5734356-images-thumbs&n=13",
        "price" : "30000",
        "productName" : "borcher"
      }
    ],
    "go'shtli ovqatlar" : [ 
    {
        "desc" : "shirin",
        "img" : "https://avatars.mds.yandex.net/i?id=ea5f0d2600a9bd43cb328652cca9298e-4576423-images-thumbs&n=13",
        "price" : "80000",
        "productName" : "zor"
      },{
        "desc" : "goshxorda",
        "img" : "https://avatars.mds.yandex.net/i?id=2de249c5047c279afa62f2b63ad6aac2-5468312-images-thumbs&n=13",
        "price" : "78990",
        "productName" : "goshxorda"
      },{
        "desc" : "shirin shashlik",
        "img" : "https://avatars.mds.yandex.net/i?id=2a00000179e896b3ba9cf67eba540aff4de8-4591692-images-thumbs&n=13",
        "price" : "120000",
        "productName" : "shashlik"
      }
    ],
    "ovqatlar" : [{
        "desc" : "lorem40",
        "img" : "https://avatars.mds.yandex.net/i?id=ea8c1c2c4b0b4ffcafd0074fd2f83acc-5238482-images-thumbs&n=13",
        "price" : "40000",
        "productName" : "ovqat1"
      }, {
        "desc" : "lorem100",
        "img" : "https://avatars.mds.yandex.net/i?id=920c19301b3c89ed4d34dc08cb05b0b9-4570375-images-thumbs&n=13",
        "price" : "50000",
        "productName" : "ovqat2"
      },{
        "desc" : "lorem150",
        "img" : "https://avatars.mds.yandex.net/i?id=e170844cf2f36f966348ccb43a987666-3600383-images-thumbs&n=13",
        "price" : "50000",
        "productName" : "ovqat10"
      },{
        "desc" : "lorem100",
        "img" : "https://avatars.mds.yandex.net/i?id=920c19301b3c89ed4d34dc08cb05b0b9-4570375-images-thumbs&n=13",
        "price" : "20000",
        "productName" : "ovqat10"
      }
    ],
    "salatlar" : [{
        "desc" : "lorem30",
        "img" : "https://avatars.mds.yandex.net/i?id=043a3b4ec03a4ea8768d05caa7af13c2-3577053-images-thumbs&n=13",
        "price" : "20000",
        "productName" : "Salat1"
      },{
        "desc" : "lorem30",
        "img" : "https://avatars.mds.yandex.net/i?id=4c980edf78539334526c94c9e2230b0d-4546420-images-thumbs&n=13",
        "price" : "25000",
        "productName" : "Salat2"
      },{
        "desc" : "lorem50",
        "img" : "https://avatars.mds.yandex.net/i?id=a6c36408358b5daf630d88688be0ec5b-5848876-images-thumbs&n=13",
        "price" : "15000",
        "productName" : "Salat3"
      },{
        "desc" : "lorem50",
        "img" : "https://avatars.mds.yandex.net/i?id=a6c36408358b5daf630d88688be0ec5b-5848876-images-thumbs&n=13",
        "price" : "20000",
        "productName" : "Salat4"
      }
    ],
    "shashliklar" : [
      {
        "desc" : "shashlik",
        "img" : "https://avatars.mds.yandex.net/i?id=da64793a7b4092af96472bddb2292b97-5904886-images-thumbs&n=13",
        "price" : "67000",
        "productName" : "shashlik"
    },
     {
        "desc" : "Tovuqli",
        "img" : "https://avatars.mds.yandex.net/i?id=f53238c73b17f877529425c09ec4fe07-3589151-images-thumbs&n=13",
        "price" : "56000",
        "productName" : "Tovuqli"
      },
      {
        "desc" : "KFC",
        "img" : "https://avatars.mds.yandex.net/i?id=2a00000179fede2e6191f5e869b1ffd30ecc-5133396-images-thumbs&n=13",
        "price" : "70000",
        "productName" : "KFC"
      },
      {
        "desc" : "zor ovqat zakaz ber",
        "img" : "https://avatars.mds.yandex.net/i?id=e15a8ba3ff8b73da1a83a9118c22b4e0-5222489-images-thumbs&n=13",
        "price" : "67000",
        "productName" : "shirin joja"
      }
    ]
  },);

  const [productsKorzina, setProductsKorzina] = useState([]);

  const [orders, setOrders] = useState([
    
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <KorzinaContext.Provider value={{ productsKorzina, setProductsKorzina }}>
        <CategoriesContext.Provider value={{ categories, setCategories }}>
          <OrdersContext.Provider value={{ orders, setOrders }}>
            <GlobalStyle />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/korzina" element = {<Korzina />}/>
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
  );
}

export default App;
