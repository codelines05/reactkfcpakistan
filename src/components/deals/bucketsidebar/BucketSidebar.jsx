/* eslint-disable no-unused-vars */
import "./BucketSidebar.css";
import { Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import { CartState } from "../../../context/Context";
import BucketProducts from "./BucketProducts";

const BucketSidebar = (props, show, handleClose) => {
  const {
    state: { cart },
    // dispatch,
  } = CartState();

  const [totalBucketPrice, setTotalBucketPrice] = useState();

  useEffect(() => {
    /* reduce() takes two inputs 1: accumulator, 2:current-element.
        -accumulator will have default value, in our case we have given it '0'.
        -[cart]: in this useState will be called, ever time our cart variable changes.
        */
    setTotalBucketPrice(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Offcanvas
        id="bucket_sidebar_offcanvas"
        show={show}
        onHide={handleClose}
        placement="end"
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            className="text-light"
            style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}
          >
            Your <br /> Bucket
          </Offcanvas.Title>
          <div className="cart-card bg-dark- rounded-0 border-0 text-white">
            <img
              className="card-img rounded-0"
              src="/assets/img/cart-icon.jpg"
              alt="cart-icon.jpg"
            />
            <div className="text-div d-flex justify-content-center align-items-center">
              <p className="num_of_cart d-inline-block m-0 font-weight-bold">
                {cart.length}
              </p>
            </div>
          </div>
          <p className="cart-price num_of_cart d-inline-block m-0 font-weight-bold">
            {totalBucketPrice}
          </p>
        </Offcanvas.Header>
        {cart.length === 0 ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ padding: "3rem", height: 200 }}
          >
            <p style={{fontSize:13}}>Hungry? Add something to your bucket !!!</p>
          </div>
        ) : (
          <>
            <Offcanvas.Body>
              {
                cart.map((crt) => <BucketProducts key={crt.id} cartitem={crt} />)
              }
            </Offcanvas.Body>
            <div className="canvas-footer">
              <div className="canvas-total d-flex justify-content-between align-items-center">
              <p
                className="mb-0 mx-2"
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                Your Total
              </p>
              <p
                className="mb-0 mx-2"
                style={{ fontSize: 20, fontWeight: 700, color: "#E21E2D" }}
              >
                PKR {totalBucketPrice}
              </p>
              </div>
            </div>
          </>
        )}
      </Offcanvas>
    </>
  );
};

export default BucketSidebar;
