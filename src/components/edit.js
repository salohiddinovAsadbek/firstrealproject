import React, { useState } from "react";
import "../styles/edit.css";
import { useDispatch } from "react-redux";
import { getActiveSection } from "../store/activeSections";

function Edit() {
  const [phone, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

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

  // async function Refresh() {
  //   const id = localStorage.getItem("id");

  //   try {
  //     const res = await fetch(
  //       `https://umaoil.up.railway.app/api/clients/${id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name, phone }),
  //       }
  //     );

  //     if (!res.ok) {
  //       console.log("Failed:", res.status);
  //       return;
  //     }

  //     const message = await res.text();
  //     console.log("Server response:", message);
  //   } catch (error) {
  //     console.error("NetworkError:", error);
  //   }
  // }

  return (
    <div
      className="editWrapper"
      onClick={() => {
        dispatch(getActiveSection(""));
      }}
    >
      <div
        className="editCard"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <h1>Profilni Tahrirlash</h1>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              dispatch(getActiveSection(""));
            }}
          ></i>
        </div>
        <div className="editForm">
          <label>
            <p>Ism</p>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </label>
          <label>
            <p>Telefon</p>
            <input
              type="text"
              onChange={(e) => {
                Phone(e.target.value);
              }}
              value={phone}
            />
          </label>
        </div>
        <div>
          <button
            onClick={() => {
              setName("");
              setPhoneNumber("");
              dispatch(getActiveSection(""));
            }}
          >
            Bekor qilish
          </button>
          <button
            onClick={() => {
              dispatch(getActiveSection(""));
            }}
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
