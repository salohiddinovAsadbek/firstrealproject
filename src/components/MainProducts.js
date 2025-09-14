import "../styles/mainProducts.css";

function MainProducts() {
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
              />
            </label>

            <select name="currency" className="currency">
              <option value="all">Barcha valyutalar</option>
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
            </select>
            <select name="arrange" className="arrange">
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
        <div className="searchProductsBottom"></div>
      </div>
    </div>
  );
}

export default MainProducts;
