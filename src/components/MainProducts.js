import "../styles/mainProducts.css";
import ShowProducts from "./ShowProducts";
import { useDispatch, useSelector } from "react-redux";
import { doCurrency, doSort, writeInput } from "../store/inputValue";
import ProductNumberMove from "./productNumberMove";
import { useEffect, useState } from "react";

function MainProducts() {
  const dispatch = useDispatch();
  const currentInput = useSelector((state) => state.inputData);
  const products = useSelector((state) => state.productsData);
  const [clear, setClear] = useState(true);

  useEffect(() => {
    const currency =
      currentInput.currency === "all" ? "" : currentInput.currency;

    const sort = currentInput.sort === "tartiblash" ? "" : currentInput.sort;

    if (currentInput.input.length > 0 || currency || sort) {
      setClear(false);
    } else {
      setClear(true);
    }
  }, [currentInput]);
  return (
    <div className="mainProducts">
      <h1>Barcha Mahsulotlar</h1>
      <div className="searchProducts">
        <div className="searchProductsTop">
          <p>Mahsulot nomi bilan qidirish</p>

          <div>
            <label htmlFor="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                id="search"
                placeholder="Mahsulot nomi bilan qidirish..."
                value={currentInput.input}
                onChange={(e) => {
                  dispatch(writeInput(e.target.value));
                }}
              />
            </label>

            <select
              name="currency"
              className="currency"
              onChange={(e) => {
                dispatch(doCurrency(e.target.value));
              }}
            >
              <option value="all">Barcha valyutalar</option>
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
            </select>
            <select
              name="arrange"
              className="arrange"
              onChange={(e) => {
                dispatch(doSort(e.target.value));
              }}
              value={currentInput.sort}
            >
              <option value="tartiblash">Tartiblash</option>
              <option value="A-Z">Nomi (A-Z)</option>
              <option value="Z-A">Nomi (Z-A)</option>
              <option value="arzon">Narx (Arzon)</option>
              <option value="qimmat">Narx (Qimmat)</option>
              <option value="yangi">Yangi</option>
              <option value="eski">Eski</option>
            </select>

            <div
              style={{ display: clear ? "none" : "flex" }}
              className="clearSearch"
              onClick={() => {
                dispatch(writeInput(""));
                dispatch(doCurrency(""));
                dispatch(doSort(""));
              }}
            >
              <i className="fa-solid fa-xmark"></i>
              <p>Tozalash</p>
            </div>
          </div>
        </div>
        <div className="searchProductsBottom">
          <p>388 ta mahsulot topildi</p>
        </div>
      </div>
      <ShowProducts />
      <ProductNumberMove />
      <p>Jami {products.length} ta mahsulot</p>
    </div>
  );
}

export default MainProducts;
