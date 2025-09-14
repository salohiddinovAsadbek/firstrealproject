import { Route, Routes } from "react-router-dom";
import Enter from "./pages/Enter";
import "./styles/style.css";
import Basket from "./pages/Basket";

function App() {
  return (
    <Routes>
      <Route element={<Enter />} path="/main" />
      <Route element={<Basket />} path="/basket" />
    </Routes>
  );
}

export default App;
