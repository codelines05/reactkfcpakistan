/* eslint-disable no-unused-vars */
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, slug, image, description, price, stock, category } = {
    ...props.product,
  };

  return (
    <div className="card product-card rounded-0">
      <div className="card card-image border-0 rounded-0">
        <img
          src={image}
          class="card-img-top rounded-0 img-fluid w-100"
          alt="pic..."
        />
        <Link to={"/product/" + slug}>
          <div className="card-img-overlay"></div>
        </Link>
      </div>
      <div class="card-body">
        <p className="title">
          <Link to={"/product/" + slug}>{title}</Link>
        </p>
        <p className="details">{description}</p>
      </div>
      <Link
        className="w-100 text-decoration-none"
        to={"/product/" + slug}
      >
        <button className="w-100 btn rounded-0 bucket_button d-flex align-items-center" disabled={stock === 0}>
          <div className="price-div bg-light w-50 px-1 p-1">
            <p className="deal-price m-0 text-uppercase">{price}</p>
          </div>
          <div className="bucket-div px-1 text-center w-50 p-1">
            <p className="add-bucket m-0 text-light text-uppercase">
              {stock === 0 ? "Deal Not Available" : "Add To Bucket"}
            </p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
