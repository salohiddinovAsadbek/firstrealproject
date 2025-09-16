import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveSection } from "../store/activeSections";

function Navigation() {
  const location = useLocation();
  const [current, setCurrent] = useState();
  const isActive = useSelector((state) => state.activeData);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  function resetAnimation() {
    dispatch(getActiveSection(""));
  }

  return (
    <div
      className="navigationWrapper"
      style={{ display: isActive === "menuBar" ? "flex" : "" }}
      onClick={() => {
        dispatch(getActiveSection(""));
      }}
    >
      <div
        className={`${isActive === "menuBar" ? "navigationAnimation" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menuNavigation">
          <h1>Menyu</h1>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              dispatch(getActiveSection(""));
            }}
          ></i>
        </div>
        <div className={`navigation`}>
          <div className="navbarTop">
            <NavLink
              className={`${
                current?.includes("/main") ? "activeNavigation" : ""
              }`}
              to={"/main"}
              onClick={() => {
                resetAnimation();
              }}
            >
              <i className="fa-solid fa-house"></i>
              <p>Bosh sahifa</p>
            </NavLink>
            <NavLink
              className={`${
                current?.includes("/basket") ? "activeNavigation" : ""
              }`}
              onClick={() => {
                resetAnimation();
              }}
              to={"/basket"}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Savat</p>
            </NavLink>
            <NavLink
              className={`${
                current?.includes("/account") ? "activeNavigation" : ""
              }`}
              onClick={() => {
                resetAnimation();
              }}
              to={"/account"}
            >
              <i className="fa-regular fa-user"></i>
              <p>Profil</p>
            </NavLink>
          </div>
          <p>© 2025 UFLEX. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
