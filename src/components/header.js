import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Login from "./login";
import { getActiveSection } from "../store/activeSections";
import SignUp from "./signup";
import { getUserActivate } from "../store/isUserEntered";
import { ToastContainer } from "react-toastify";

function Header() {
  const products = useSelector((state) => state.productsData);
  const [howMany, setHowMany] = useState(0);
  const navigate = useNavigate();
  const activeSection = useSelector((state) => state.activeData);
  const dispatch = useDispatch();
  const isUserActivated = useSelector((state) => state.userData);

  useEffect(() => {
    let many = 0;

    products.map((item) => {
      if (item.soni > 0) {
        many += 1;
      }
      return null;
    });

    setHowMany(many);
  }, [products]);

  return (
    <div className="header">
      <div>
        <button
          className="menuBar"
          onClick={() => {
            dispatch(getActiveSection("menuBar"));
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <NavLink to="/">
          <img src={Logo} alt="mainLogo" />
          <p>UMA OIL</p>
        </NavLink>
      </div>
      <div className="headerRight">
        <i
          className="fa-solid fa-cart-shopping"
          onClick={() => {
            navigate("/basket");
          }}
        >
          <p style={{ display: howMany === 0 ? "none" : "flex" }}>{howMany}</p>
        </i>
        {isUserActivated ? (
          <div className="enteredStateAccount">
            <i
              className="fa-regular fa-user"
              onClick={() => {
                navigate("/account");
              }}
            ></i>
            {/* <p>{userDataAll.fullName}</p> */}
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              onClick={() => {
                localStorage.clear();
                dispatch(getUserActivate(false));
              }}
            ></i>
          </div>
        ) : (
          <button
            className="enter"
            onClick={() => {
              dispatch(getActiveSection("login"));
            }}
          >
            Kirish
          </button>
        )}
      </div>

      <ToastContainer />

      {activeSection === "login" ? <Login /> : ""}
      {activeSection === "signup" ? <SignUp /> : ""}
    </div>
  );
}

export default Header;
