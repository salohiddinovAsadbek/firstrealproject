import { Route, Routes } from "react-router-dom";
import Enter from "./pages/Enter";
import "./styles/style.css";
import Basket from "./pages/Basket";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./store/products";
import UserAccount from "./pages/userAccount";
import { addAnimation } from "./store/isWaiting";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://umaoil.up.railway.app/api/products?page=1&limit=1000")
      .then((res) => res.json())
      .then((data1) => {
        const productsWithSoni = data1?.data.map((item) => ({
          ...item,
          soni: 0,
        }));

        dispatch(getProducts(productsWithSoni));
        dispatch(addAnimation(false));
      })
      .catch((err) => console.error("Error:", err));
  }, [dispatch]);

  useEffect(() => {
    fetch("https://umaoil.up.railway.app/api/clients")
      .then((res) => res.json())
      .then((data1) => {
        console.log(data1);
      })
      .catch((err) => console.error("Error:", err));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Enter />}>
        <Route path="main" element={<Enter />} />
      </Route>
      <Route path="/basket" element={<Basket />} />
      <Route path="/account" element={<UserAccount />} />
    </Routes>
  );
}

export default App;
