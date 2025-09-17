import { useEffect } from "react";

function ProtectedRoute({ children }) {
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://example.com/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>{children} salom</div>;
}

export default ProtectedRoute;
