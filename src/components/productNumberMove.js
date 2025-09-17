import "../styles/productNumberMove.css";
import { useDispatch, useSelector } from "react-redux";
import { getPage, getPages, getPerPage } from "../store/pagesCountData";
import { useEffect, useState } from "react";

function ProductNumberMove() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsData);
  const { page, pages, perPage } = useSelector((state) => state.pageData);

  const [tempPage, setTempPage] = useState(page);

  useEffect(() => {
    dispatch(getPages(Math.ceil(products.length / perPage)));
  }, [products, perPage, dispatch]);

  useEffect(() => {
    setTempPage(page);
  }, [page]);

  return (
    <div className="productMove">
      <button
        disabled={page === 1}
        onClick={() => dispatch(getPage(page - 1))}
        style={{ opacity: page === 1 ? "70%" : "100%" }}
      >
        Oldingi
      </button>

      <div className="productMoveCenter">
        <select
          value={perPage}
          onChange={(e) => {
            const newPerPage = Number(e.target.value);
            dispatch(getPerPage(newPerPage));
            dispatch(getPages(Math.ceil(products.length / newPerPage)));
            dispatch(getPage(1));
          }}
        >
          <option value="10">10 ta</option>
          <option value="20">20 ta</option>
          <option value="50">50 ta</option>
          <option value="100">100 ta</option>
          <option value="1000">1000 ta</option>
        </select>

        <div>
          <p>Sahifa</p>
          <input
            type="number"
            min={1}
            max={pages}
            value={tempPage}
            onChange={(e) => {
              const val = e.target.value;
              setTempPage(val);
              if (val !== "" && Number(val) >= 1 && Number(val) <= pages) {
                dispatch(getPage(Number(val)));
              }
            }}
            onBlur={() => {
              if (tempPage === "" || Number(tempPage) < 1) {
                setTempPage(page);
              }
            }}
          />
          <p>/{pages}</p>
        </div>
      </div>

      <button
        disabled={page === pages}
        style={{ opacity: page === pages ? "70%" : "100%" }}
        onClick={() => dispatch(getPage(page + 1))}
      >
        Keyingi
      </button>
    </div>
  );
}

export default ProductNumberMove;
