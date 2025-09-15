import { useEffect, useState } from "react";
import "../styles/mainProducts.css";
import ShowProducts from "./ShowProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/products";
import { addFilter } from "../store/filter";
import { writeInput } from "../store/inputValue";

function MainProducts() {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [currency, setCurrency] = useState("all");
  const data = useSelector((state) => state.productsData);
  const filteredData = useSelector((state) => state.filteredData);

  useEffect(() => {
    fetch("https://umaoil.up.railway.app/api/products")
      .then((res) => res.json())
      .then((data1) => {
        console.log(data1.data);

        const productsWithSoni = data1?.data.map((item) => ({
          ...item,
          soni: 0,
        }));

        dispatch(getProducts(productsWithSoni));
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  function Filter(value, currency) {
    let data2 = [];

    for (let i = 0; i < data?.length; i++) {
      const product = data[i];
      const matchesName = product.name
        .toLowerCase()
        .includes(value.toLowerCase());
      const matchesCurrency =
        currency === "all" ? true : product.currency === currency;

      if (matchesName && matchesCurrency) {
        data2.push(product);
      }
    }

    dispatch(addFilter(data2));
  }

  useEffect(() => {
    console.log(filteredData);
    console.log(data);
  }, [searchName]);

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
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value);
                  dispatch(writeInput(e.target.value));
                  Filter(e.target.value, currency);
                }}
              />
            </label>

            <select
              name="currency"
              className="currency"
              onChange={(e) => {
                setCurrency(e.target.value);
                Filter(searchName, e.target.value);
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
                Filter();
              }}
            >
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
    </div>
  );
}

export default MainProducts;
