import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Navigation from "../components/Navigation";
import "../styles/basket.css";
import { getProducts } from "../store/products";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Basket() {
  const products = useSelector((state) => state.productsData);
  const dispatch = useDispatch();
  const [overallPrice, setOverallPrice] = useState(0);
  const isUserActivated = useSelector((state) => state.userData);

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      if (item.soni > 0) {
        total += item.soni * item.salePrice;
      }

      return null;
    });

    setOverallPrice(total);
  }, [products]);

  function toastify(value, type) {
    if (type === "err") {
      toast.error(`${value}`, {
        position: "top-left", // top-right, top-left, top-center...
        autoClose: 2000,
      });
    }
    if (type === "succ") {
      console.log(type);

      toast.success(`${value}`, {
        position: "top-left", // top-right, top-left, top-center...
        autoClose: 2000,
      });
    }
  }

  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <div className="basketWrapper">
          <h1>Savat</h1>
          {overallPrice > 0 ? (
            <div>
              <div className="basketWrapperProducts">
                {products?.map((item, i) => {
                  if (!item.soni > 0) return null;
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

                            toastify(
                              "Mahsulot savatdan olib tashlandi",
                              "succ"
                            );

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
                <button
                  className="verifyBtn"
                  onClick={() => {
                    if (isUserActivated) {
                      toastify("Muvaffaqiyatli yuborildi", "succ");
                    } else {
                      toastify("Iltimos, avval tizimga kiring", "err");
                    }
                  }}
                >
                  Buyurtmani rasmiylashtirish
                </button>
              </div>
            </div>
          ) : (
            <div className="basketEmpty">
              <i className="fa-solid fa-trash"></i>
              <h1>Savat bo'sh</h1>
              <p>Mahsulotlarni savatga qo'shing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
