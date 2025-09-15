import { Route, Routes } from "react-router-dom";
import Enter from "./pages/Enter";
import "./styles/style.css";
import Basket from "./pages/Basket";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./store/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://umaoil.up.railway.app/api/products")
      .then((res) => res.json())
      .then((data1) => {
        console.log(data1.data);

        const productsWithSoni = data1?.data.map((item) => ({
          ...item,
          soni: 0,
        }));

        dispatch(getProducts(productsWithSoni));
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <Routes>
      <Route element={<Enter />} path="/main" index />
      <Route element={<Basket />} path="/basket" />
    </Routes>
  );
}

export default App;
