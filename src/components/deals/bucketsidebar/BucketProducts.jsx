/* eslint-disable no-unused-vars */
import "./BucketSidebar.css";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { CartState } from "../../../context/Context";

const BucketProducts = (cartItm) => {
  const { id, title, slug, image, description, price, stock, category } = {
    ...cartItm.cartitem,
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const prod = cart.find((p) => p.id === id);

  return (
    <div className="bucket_products p-1 bg-light_ border mb-1">
      <div className="prod-info d-flex align-items-center">
        <Link
          to={"/product/" + slug}
          className="prod-info-link w-100 d-flex align-items-center"
        >
          <p className="prod-name mb-0">{title}</p>
          <p className="prod-price ms-auto me-2 mb-0">{price * prod.qty}</p>
        </Link>
        <ImCross
          className="ms-auto delete-product"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            })
          }
        />
      </div>
      <div className="prod-quantity">
        <span>{prod.qty}</span>
        <span className="mx-1">x</span>
        <span>{price}</span>
      </div>
      <div className="prod-quantity-btns mt-2">
        <button
          className="px-2"
          onClick={() => {
            if (prod.qty > 1) {
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: {
                  id: prod.id,
                  qty: prod.qty - 1,
                },
              });
            }
          }}
        >
          -
        </button>
        <button
          className="ms-3"
          onClick={() => {
            dispatch({
              type: "CHANGE_CART_QTY",
              payload: {
                id: prod.id,
                qty: prod.qty + 1,
              },
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BucketProducts;
