import { useSelector } from "react-redux";
import "../styles/showproducts.css";
import { useEffect } from "react";

function ShowProducts() {
  let products = useSelector((state) => state.productsData);
  const filtered = useSelector((state) => state.filteredData);
  const currentInput = useSelector((state) => state.inputData);

  useEffect(() => {}, [filtered]);

  const showWhat = currentInput?.length > 0 ? true : false;

  return (
    <div className="showProducts">
      {showWhat
        ? filtered.map((item, i) => {
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
                <button className="intoBasket">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Savatga</p>
                </button>
              </div>
            );
          })
        : products.map((item, i) => {
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
                <button className="intoBasket">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Savatga</p>
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default ShowProducts;
