import Header from "../components/header";
import Navigation from "../components/Navigation";
import "../styles/basket.css";

function Basket() {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <div className="basketWrapper">
          <h1>Savat</h1>
          <div className="basketWrapperProducts">
            <div className="basketCard">
              <p>
                <span>PETRO BASS 5W-40</span>
                <span>120,000 UZS</span>
              </p>
              <div>
                <button className="functionalBtn">-</button>
                <input type="number" />
                <button className="functionalBtn">+</button>
                <button className="deleteBtn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
