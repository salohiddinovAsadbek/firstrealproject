import { NavLink } from "react-router-dom";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { getActiveSection } from "../store/activeSections";
import { useState } from "react";
import { getUserActivate } from "../store/isUserEntered";
import { getUserData } from "../store/userData";

function Login() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isHide, setHide] = useState(false);

  function Phone(value) {
    let digits = value.replace(/\D/g, "");

    if (!digits.startsWith("998")) {
      digits = "998" + digits;
    }

    let formatted = "+" + digits;

    if (digits.length > 3) {
      formatted = "+" + digits.slice(0, 3) + " " + digits.slice(3, 5);
    }
    if (digits.length > 5) {
      formatted += " " + digits.slice(5, 8);
    }
    if (digits.length > 8) {
      formatted += " " + digits.slice(8, 10);
    }
    if (digits.length > 10) {
      formatted += " " + digits.slice(10, 12);
    }

    setPhoneNumber(formatted);
  }

  async function CheckUser() {
    try {
      const res = await fetch(
        "https://umaoil.up.railway.app/api/clients/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: phoneNumber, password: password }),
        }
      );

      if (!res.ok) {
        console.log("Login failed:", res.status);
        return;
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.client._id);

      dispatch(getUserData(data));
      dispatch(getUserActivate(true));
      dispatch(getActiveSection(""));
    } catch (err) {
      console.log("Network error:", err);
    }
  }

  return (
    <div
      className="login"
      onClick={() => {
        dispatch(getActiveSection(""));
      }}
    >
      <div
        className="loginCard"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <p>Tizimga kirish</p>
          <i
            className="fa-solid fa-xmark"
            onClick={(e) => {
              dispatch(getActiveSection(""));
            }}
          ></i>
        </div>
        <div className="loginForm">
          <div>
            <p>Telefon</p>
            <input
              type="text"
              onChange={(e) => {
                Phone(e.target.value);
              }}
              placeholder="+998 90 123 45 67"
              value={phoneNumber}
            />
          </div>
          <div>
            <p>Parol</p>
            <label>
              <input
                type={`${isHide ? "password" : "text"}`}
                placeholder="Parolingiz"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <i
                className="fa-solid fa-eye"
                onClick={() => {
                  setHide((c) => !c);
                }}
              >
                <p style={{ display: isHide ? "none" : "flex" }}></p>
              </i>
            </label>
          </div>
          <button
            className="loginBtn"
            onClick={() => {
              CheckUser();
            }}
          >
            Kirish
          </button>
        </div>
        <p>
          Hisobingiz yo'qmi?{" "}
          <NavLink
            onClick={() => {
              dispatch(getActiveSection("signup"));
            }}
          >
            Ro'yxatdan o'tish
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
