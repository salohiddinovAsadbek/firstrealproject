import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navigation() {
  const location = useLocation();
  const [current, setCurrent] = useState();

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  return (
    <div className="navigation">
      <div className="navbarTop">
        <NavLink
          className={`${current?.includes("/main") ? "activeNavigation" : ""}`}
          to={"/main"}
        >
          <i className="fa-solid fa-house"></i>
          <p>Bosh sahifa</p>
        </NavLink>
        <NavLink
          className={`${
            current?.includes("/basket") ? "activeNavigation" : ""
          }`}
          to={"/basket"}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Savat</p>
        </NavLink>
        <NavLink
          className={`${
            current?.includes("/account") ? "activeNavigation" : ""
          }`}
          to={"/account"}
        >
          <i className="fa-regular fa-user"></i>
          <p>Profil</p>
        </NavLink>
      </div>
      <p>© 2025 UFLEX. Barcha huquqlar himoyalangan.</p>
    </div>
  );
}

export default Navigation;
