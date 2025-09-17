import "../styles/mainProducts.css";
import ShowProducts from "./ShowProducts";
import { useDispatch, useSelector } from "react-redux";
import { doCurrency, writeInput } from "../store/inputValue";
import ProductNumberMove from "./productNumberMove";

function MainProducts() {
  const dispatch = useDispatch();
  const currentInput = useSelector((state) => state.inputData);
  const products = useSelector((state) => state.productsData);

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
            <select name="arrange" className="arrange" onChange={(e) => {}}>
              <option value="tartiblash">Tartiblash</option>
              <option value="A-Z">Nomi (A-Z)</option>
              <option value="Z-A">Nomi (Z-A)</option>
              <option value="arzon">Narx (Arzon)</option>
              <option value="qimmat">Narx (Qimmat)</option>
              <option value="yangi">Yangi</option>
              <option value="Eski">Eski</option>
            </select>
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
