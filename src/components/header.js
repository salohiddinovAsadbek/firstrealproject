import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to="/main">
        <img src={Logo} alt="mainLogo" />
        <p>UMA OIL</p>
      </NavLink>
      <div className="headerRight">
        <i className="fa-solid fa-cart-shopping"></i>
        <button className="enter">Kirish</button>
      </div>
    </div>
  );
}

export default Header;
