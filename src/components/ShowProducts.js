import { useDispatch, useSelector } from "react-redux";
import "../styles/showproducts.css";
import { getProducts } from "../store/products";
import WaitAnimation from "./waitAnimation";

function ShowProducts() {
  const products = useSelector((state) => state.productsData);
  const currentInput = useSelector((state) => state.inputData);
  const dispatch = useDispatch();
  const animation = useSelector((state) => state.animationData);

  function AddBasket(item) {
    const newProduct = products.map((itemNew) =>
      itemNew._id === item._id ? { ...itemNew, soni: 1 } : itemNew
    );

    dispatch(getProducts(newProduct));
  }

  function IncOrDec(type, item) {
    let newproduct = [];

    if (type === "increment") {
      newproduct = products.map((newitem) =>
        newitem._id === item._id
          ? { ...newitem, soni: newitem.soni + 1 }
          : newitem
      );

      dispatch(getProducts(newproduct));
    }

    if (type === "decrement") {
      newproduct = products.map((newitem) =>
        newitem._id === item._id
          ? { ...newitem, soni: newitem.soni - 1 }
          : newitem
      );

      dispatch(getProducts(newproduct));
    }

    if (type === "delete") {
      newproduct = products.map((newitem) =>
        newitem._id === item._id ? { ...newitem, soni: 0 } : newitem
      );

      dispatch(getProducts(newproduct));
    }
  }

  return (
    <div className="showProducts">
      {animation ? <WaitAnimation /> : ""}

      {currentInput?.length > 0
        ? products.map((item, i) => {
            if (!item.name.toLowerCase().includes(currentInput)) return null;
            return (
              <div className="showProductsCard" key={`${item.branch._id}+${i}`}>
                <img
                  src={item?.images[0]?.fileURL}
                  alt={`${item.description}`}
                  height={170}
                />
                <h1>{item?.name}</h1>
                <p>{item?.description}</p>
                <p>{item?.salePrice} UZS</p>

                {item?.soni > 0 ? (
                  <div className="showProductCardFunction">
                    <button
                      className="showProductFunctionalBtn"
                      onClick={() => {
                        IncOrDec("decrement", item);
                      }}
                    >
                      -
                    </button>
                    <p>{item.soni}</p>
                    <button
                      className="showProductFunctionalBtn"
                      onClick={() => {
                        IncOrDec("increment", item);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="showProductdeleteBtn"
                      onClick={() => {
                        IncOrDec("delete", item);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ) : (
                  <button
                    className="intoBasket"
                    onClick={() => {
                      AddBasket(item);
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Savatga</p>
                  </button>
                )}
              </div>
            );
          })
        : ""}

      {currentInput?.length === 0
        ? products.map((item, i) => {
            return (
              <div className="showProductsCard" key={`${item.branch._id}+${i}`}>
                {item.images[0]?.fileURL ? (
                  <img
                    src={item?.images[0]?.fileURL}
                    alt={`${item.description}`}
                    height={170}
                  />
                ) : (
                  <p className="imgDefault">{item.description}</p>
                )}
                <h1>{item?.name}</h1>
                <p>{item?.description}</p>
                <p>{item?.salePrice} UZS</p>

                {item?.soni > 0 ? (
                  <div className="showProductCardFunction">
                    <button
                      className="showProductFunctionalBtn"
                      onClick={() => {
                        IncOrDec("decrement", item);
                      }}
                    >
                      -
                    </button>
                    <p>{item.soni}</p>
                    <button
                      className="showProductFunctionalBtn"
                      onClick={() => {
                        IncOrDec("increment", item);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="showProductdeleteBtn"
                      onClick={() => {
                        IncOrDec("delete", item);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ) : (
                  <button
                    className="intoBasket"
                    onClick={() => {
                      AddBasket(item);
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Savatga</p>
                  </button>
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default ShowProducts;
