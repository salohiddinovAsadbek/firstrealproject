import { useDispatch, useSelector } from "react-redux";
import "../styles/showproducts.css";
import { getProducts } from "../store/products";
import WaitAnimation from "./waitAnimation";

function ShowProducts() {
  const products = useSelector((state) => state.productsData);
  const currentInput = useSelector((state) => state.inputData);
  const dispatch = useDispatch();
  const animation = useSelector((state) => state.animationData);
  const pageData = useSelector((state) => state.pageData);

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
    }

    if (type === "decrement") {
      newproduct = products.map((newitem) =>
        newitem._id === item._id
          ? { ...newitem, soni: newitem.soni - 1 }
          : newitem
      );
    }

    if (type === "delete") {
      newproduct = products.map((newitem) =>
        newitem._id === item._id ? { ...newitem, soni: 0 } : newitem
      );
    }

    dispatch(getProducts(newproduct));
  }

  let filteredProducts = products.filter((item) => {
    if (
      currentInput?.input &&
      !item.name.toLowerCase().includes(currentInput.input.toLowerCase())
    ) {
      return false;
    }

    if (currentInput?.currency && currentInput.currency !== "all") {
      if (item.currency !== currentInput.currency) {
        return false;
      }
    }

    return true;
  });

  const newArr = filteredProducts.slice(
    (pageData.page - 1) * Number(pageData.perPage),
    (pageData.page - 1) * Number(pageData.perPage) + Number(pageData.perPage)
  );

  return (
    <div className="showProducts">
      {animation && <WaitAnimation />}

      {newArr.map((item, i) => (
        <div className="showProductsCard" key={`${item.branch._id}+${i}`}>
          {item.images[0]?.fileURL ? (
            <img
              src={item?.images[0]?.fileURL}
              alt={item?.description || item?.name}
              height={170}
            />
          ) : (
            <p className="imgDefault">{item.description}</p>
          )}
          <h1>{item?.name}</h1>
          <p>{item?.description}</p>
          <p>
            {item?.salePrice} {item?.currency || "UZS"}
          </p>

          {item?.soni > 0 ? (
            <div className="showProductCardFunction">
              <button
                className="showProductFunctionalBtn"
                onClick={() => IncOrDec("decrement", item)}
              >
                -
              </button>
              <p>{item.soni}</p>
              <button
                className="showProductFunctionalBtn"
                onClick={() => IncOrDec("increment", item)}
              >
                +
              </button>
              <button
                className="showProductdeleteBtn"
                onClick={() => IncOrDec("delete", item)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ) : (
            <button className="intoBasket" onClick={() => AddBasket(item)}>
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Savatga</p>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ShowProducts;
