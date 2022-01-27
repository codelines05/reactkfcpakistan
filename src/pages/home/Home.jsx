/* eslint-disable no-unused-vars */
import Slides from "../../components/slides/Slides";
import ProductCard from "../../components/deals/productcard/ProductCard";
import "./Home.css";
// import { products } from "../../db/data";
import { CartState } from "../../context/Context";

const Home = () => {
  const {
    state: {products},
  } = CartState();
// console.log(products);

  return (
    <>
      <Slides />
      <div className="home-deals">
        <h3 className="border feature-products_title text-center p-2 mb-5 text-uppercase">
          Signature Boxes
        </h3>
        <div className="row">
          {products.map((product, i) => {
            if (product.category === "signature-box") {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mb-3">
                  <ProductCard key={i} product={product} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
