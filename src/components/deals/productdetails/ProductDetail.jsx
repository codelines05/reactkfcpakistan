/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { /*products, */ drinks, addons } from "../../../db/data";
import { Link } from "react-router-dom";
import AddDrinkRadio from "../AddDrinkRadio";
import AddOnsCheckBox from "../AddOnsCheckBox";
import { CartState } from "../../../context/Context";

const ProductDetail = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  let { slug } = useParams();
  // filter() return the array of object after test function (test function = after matching)
  // find() return the single object after test function (test function = after matching)
  const prod = products.find((p) => p.slug === slug);
  const cartItem = cart.find((p) => p.slug === slug);

  const drinks = prod.drinks;
  const addons = prod.addons;
  console.log(addons)
  console.log(addons.name)

  const [productQuantity, setProductQuantity] = useState(prod.quantity);
  const [productPrice, setProductPrice] = useState(prod.price);

  useEffect(() => {
    cart.map((cprod) => {
      if (cprod.id === prod.id) {
        setProductQuantity(cprod.qty);
      }
    });
  });
  // console.log(cart);

  const [currentDrink, setCurrentDrink] = useState(
    /* drinks.slice(-1): To get last item of an array */
    drinks.find((i) => i !== undefined)
  ); //Getting first item of an array.

  const handleCurrentDrink = (drink) => {
    setCurrentDrink(drink);
  };

  return (
    <div className="product-details-section">
    <h2>{addons.name}</h2>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-5 mb-2">
          <div className="row justify-content-end">
            <div className="col-md-10">
              <img className="img-fluid w-100" src={prod.image} alt="" />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-7 p-md-0">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item text-capitalize">
                <Link to={"/collection/" + prod.category}>
                  {prod.category.split("-").join(" ")}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {prod.title}
              </li>
            </ol>
          </nav>
          <h4 className="prod_title">{prod.title}</h4>
          <p className="prod_description">{prod.description}</p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingAddDrink">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAddDrink"
                  aria-expanded="true"
                  aria-controls="collapseAddDrink"
                >
                  Select Drink
                  <span className="selected_drink">{currentDrink}</span>
                </button>
              </h2>
              <div
                id="collapseAddDrink"
                className="accordion-collapse collapse show_"
                aria-labelledby="headingAddDrink"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {
                    <AddDrinkRadio
                      drinks={drinks}
                      setdrink={handleCurrentDrink}
                    />
                  }
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingAddAddons">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAddAddons"
                  aria-expanded="false"
                  aria-controls="collapseAddAddons"
                >
                  Add Ons
                </button>
              </h2>
              <div
                id="collapseAddAddons"
                className="accordion-collapse collapse"
                aria-labelledby="headingAddAddons"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {addons.map((addon, i) => (
                    <AddOnsCheckBox key={i} addon={addon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-11 col-lg-9">
              <div className="detail-price-box">
                <h4>
                  {/* {productPrice * productQuantity} */}
                  {cartItem === undefined
                    ? productPrice
                    : productPrice * productQuantity}
                </h4>
                <div
                  className="price-bucket d-flex align-items-center justify-content-center"
                  style={{ flexWrap: "wrap" }}
                >
                  <button
                    className={
                      cartItem === undefined
                        ? "btn  text-danger bg-light rounded-0"
                        : "btn btn-outline-danger rounded-0"
                    }
                    style={
                      cartItem === undefined
                        ? { boxShadow: "none", cursor: "text" }
                        : { boxShadow: "none" }
                    }
                    onClick={() => {
                      if (productQuantity > 1) {
                        // setProductQuantity(productQuantity - 1);
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: productQuantity - 1,
                          },
                        });
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="btn border border-danger border-start-0 border-end-0 rounded-0 m-0">
                    {cartItem === undefined ? prod.quantity : productQuantity}
                  </p>
                  <button
                    className={
                      cartItem === undefined
                        ? "btn  text-danger bg-light rounded-0"
                        : "btn btn-outline-danger rounded-0"
                    }
                    style={
                      cartItem === undefined
                        ? { boxShadow: "none", cursor: "text" }
                        : { boxShadow: "none" }
                    }
                    onClick={() => {
                      // setProductQuantity(productQuantity + 1);
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: productQuantity + 1,
                        },
                      });
                    }}
                  >
                    +
                  </button>
                  <div className="mt-2 w-100 d-block d-sm-none"></div>
                  {
                    //some() helps us check it that particular thing exists inside of the array or not.
                    /* dispatch(takes type, takes payload) */
                    cart.some((p) => p.id === prod.id) ? (
                      <button
                        className="btn_add_bucket btn btn-danger rounded-0 ms-0 ms-sm-auto px-5_ text-uppercase"
                        onClick={() => {
                          dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                          // setProductQuantity(1);
                        }}
                      >
                        Remove From Bucket
                      </button>
                    ) : (
                      <button
                        className={
                          prod.stock === 0
                            ? "btn btn-danger-outline border-3 text-danger rounded-0 ms-0 ms-sm-auto px-5 text-uppercase"
                            : "btn_add_bucket btn btn-danger rounded-0 ms-0 ms-sm-auto px-5 text-uppercase"
                        }
                        disabled={prod.stock === 0}
                        onClick={() =>
                          dispatch({ type: "ADD_TO_CART", payload: prod })
                        }
                      >
                        {prod.stock === 0 ? "Deal Not Available" : "Add To Bucket"}
                      </button>
                    )
                  }
                </div>
              </div>
              <p className="mt-2" style={{ fontSize: "12px", color: "#555" }}>
                *Prices may vary at motorway outlets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
