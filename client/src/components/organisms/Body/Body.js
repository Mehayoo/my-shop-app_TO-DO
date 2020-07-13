import React, { useContext, useEffect } from "react";
import ProductsContext from "../../../context/products/productsContext";
import { Product, Spinner } from "../../index";
import "./Body.scss";

const Body = () => {
  const productsContext = useContext(ProductsContext);
  const { loading, products, getProducts } = productsContext;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ms-body">
      <h5>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </h5>
      {products && Object.keys(products).length && !loading ? (
        <ul className="ms-body__productsList row">
          {products.products.map((product) => (
            <li
              key={product._id}
              className="ms-body__productsList--item col m3"
            >
              <Product item={product} />
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Body;
