import React, { useContext, useEffect } from "react";
import ProductsContext from "../../../context/products/productsContext";
import { Product, Spinner } from "../../index";
import "./Body.scss";

const Body = () => {
  const productsContext = useContext(ProductsContext);
  const { loading, products, getProducts } = productsContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  console.log("products in BODY: ", products);

  return (
    <body className="ms-body">
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
    </body>
  );
};

export default Body;
