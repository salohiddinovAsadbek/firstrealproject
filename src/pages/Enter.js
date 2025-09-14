import Header from "../components/header";
import MainProducts from "../components/MainProducts";
import Navigation from "../components/Navigation";
import "../styles/enter.css";

function Enter() {
  return (
    <div>
      <Header />
      <div className="enter">
        <Navigation />
        <MainProducts />
      </div>
    </div>
  );
}

export default Enter;
