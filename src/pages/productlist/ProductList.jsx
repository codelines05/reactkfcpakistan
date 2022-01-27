/* eslint-disable no-unused-vars */
import "./ProductList.css";
import { useParams } from "react-router-dom";
// import { products } from "../../db/data";
import ProductCard from "../../components/deals/productcard/ProductCard";
import { CartState } from "../../context/Context";

const ProductList = () => {

  const {
    state: {products},
  } = CartState();

  let { category } = useParams();
  // filter() return the array of object after test function (test function = after matching)
  // find() return the single object after test function (test function = after matching)
  const prods = products.filter((p) => p.category === category);

  return (
    <>
      <div className="product-list">
        <h3 className="border feature-products_title text-center p-2 mb-5 text-uppercase">
          {category.split("-").join(" ")}
        </h3>

        <div className="row">
          {prods.map((pr, i) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mb-3">
                <ProductCard key={i} product={pr} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
