import { Route, Routes } from "react-router-dom";
import Enter from "./pages/Enter";
import Basket from "./pages/Basket";
import UserAccount from "./pages/userAccount";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./store/products";
import { addAnimation } from "./store/isWaiting";
import "./styles/style.css";
import { getUserActivate } from "./store/isUserEntered";
import { getUserData } from "./store/userData";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://umaoil.up.railway.app/api/products?page=1&limit=1000")
      .then((res) => res.json())
      .then((data1) => {
        const productsWithSoni = data1?.data.map((item) => ({
          ...item,
          quantity: 0,
        }));

        dispatch(getProducts(productsWithSoni));
        dispatch(addAnimation(false));
      })
      .catch((err) => console.error("Error:", err));
  }, [dispatch]);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token2 = localStorage.getItem("token");

    if (userId && token2) {
      fetch(`https://umaoil.up.railway.app/api/clients/${userId}`)
        .then((res) => {
          if (!res.ok) throw new Error("User not found");
          return res.json();
        })
        .then((data) => {
          if (userId === data._id) {
            dispatch(getUserActivate(true));
            dispatch(getUserData(data));
          } else {
            console.log("token mos emas");
          }
        })
        .catch((err) => console.error(err));
    }

    fetch("https://umaoil.up.railway.app/api/clients")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Enter />}>
        <Route path="/main" element={<Enter />} />
      </Route>
      <Route path="/basket" element={<Basket />} />
      <Route path="/account" element={<UserAccount />} />
      {/* <Route
        path="/main"
        element={
          <ProtectedRoute>
            <Enter />
          </ProtectedRoute>
        }
      >
        <Route path="basket" element={<Basket />} />
        <Route path="account" element={<UserAccount />} />
      </Route> */}
    </Routes>
  );
}

export default App;
