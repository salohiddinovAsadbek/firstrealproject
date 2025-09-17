import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getActiveSection } from "../store/activeSections";
import "../styles/login.css";
import { getUserActivate } from "../store/isUserEntered";

function SignUp() {
  const [isHide, setHide] = useState(false);
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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

  async function SignUpUser() {
    try {
      const res = await fetch("https://umaoil.up.railway.app/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          phone: phoneNumber.replace(/\D/g, ""),
          password: password,
          birthday: "2025-09-17",
          branch: "6877dd28939ecd40fa5fc930",
          isVip: false,
          notes: "New user",
          cars: [],
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.log(
          "Signup error:",
          errData?.errors?.[0]?.msg || "Signup failed"
        );
        return;
      }

      const data = await res.json();
      console.log("Signup success:", data);
      console.log(password);

      setPhoneNumber("");
      setName("");
      setPassword("");

      dispatch(getUserActivate(true));
      dispatch(getActiveSection(""));
      localStorage.setItem("id", data._id);
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
          <p>Ro'yhatdan o'tish</p>
          <i
            className="fa-solid fa-xmark"
            onClick={(e) => {
              dispatch(getActiveSection(""));
            }}
          ></i>
        </div>
        <div className="loginForm signUpForm">
          <div>
            <p>To'liq ismingiz</p>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Ismingiz"
              value={name}
            />
          </div>
          <div>
            <p>Telefon</p>
            <input
              type="text"
              onChange={(e) => {
                Phone(e.target.value);
              }}
              value={phoneNumber}
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div>
            <p>Parol</p>
            <label>
              <input
                type={`${isHide ? "password" : "text"}`}
                placeholder="Parolingiz"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
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
              SignUpUser();
            }}
          >
            Ro'yhatdan o'tish
          </button>
        </div>
        <p>
          Allaqachon hisobingiz bormi? &nbsp;
          <NavLink
            onClick={() => {
              dispatch(getActiveSection("login"));
            }}
          >
            Kirish
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
