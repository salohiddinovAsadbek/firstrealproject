import "../styles/productNumberMove.css";

function ProductNumberMove() {
  return (
    <div className="productMove">
      <button>Oldingi</button>
      <div className="productMoveCenter">
        <select>
          <option value="10">10 ta</option>
          <option value="20">20 ta</option>
          <option value="50">50 ta</option>
          <option value="100">100 ta</option>
          <option value="1000">1000 ta</option>
        </select>
        <div>
          <p>Sahifa</p>
          <input type="text" />
          <p>/20</p>
        </div>
      </div>
      <button>Keyingi</button>
    </div>
  );
}

export default ProductNumberMove;
