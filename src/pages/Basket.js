import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Navigation from "../components/Navigation";
import "../styles/basket.css";
import { getProducts } from "../store/products";
import { useEffect, useState } from "react";

function Basket() {
  const products = useSelector((state) => state.productsData);
  const dispatch = useDispatch();
  const [overallPrice, setOverallPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      if (item.soni > 0) {
        total += item.soni * item.salePrice;
      }
    });

    setOverallPrice(total);
  }, [products]);

  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <div className="basketWrapper">
          <h1>Savat</h1>
          <div className="basketWrapperProducts">
            {products?.map((item, i) => {
              if (!item.soni > 0) return;
              return (
                <div
                  className="basketCard"
                  key={`${item.name + item._id} + ${i}`}
                >
                  <p>
                    <span>{item.name}</span>
                    <span>
                      {item.salePrice} {item.currency}
                    </span>
                  </p>
                  <div>
                    <button
                      className="functionalBtn"
                      onClick={() => {
                        const newProduct = products.map((newitem) => {
                          return newitem._id === item._id
                            ? { ...newitem, soni: newitem.soni - 1 }
                            : newitem;
                        });

                        dispatch(getProducts(newProduct));
                      }}
                    >
                      -
                    </button>
                    <p>{item.soni}</p>
                    <button
                      className="functionalBtn"
                      onClick={() => {
                        const newProduct = products.map((newitem) => {
                          return newitem._id === item._id
                            ? { ...newitem, soni: newitem.soni + 1 }
                            : newitem;
                        });

                        dispatch(getProducts(newProduct));
                      }}
                    >
                      +
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => {
                        const newProduct = products.map((newitem) => {
                          return newitem._id === item._id
                            ? { ...newitem, soni: 0 }
                            : newitem;
                        });

                        dispatch(getProducts(newProduct));
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="overallPrice">
            <div>
              <h1>Jami:</h1>
              <p>{overallPrice} UZS</p>
            </div>
            <div>
              <h1>To'lov uchun:</h1>
              <p>{overallPrice} UZS</p>
            </div>
            <button className="verifyBtn">Buyurtmani rasmiylashtirish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
