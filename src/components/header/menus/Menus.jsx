/* eslint-disable no-unused-vars */
import "./Menus.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartState } from "../../../context/Context";
import BucketSidebar from "../../deals/bucketsidebar/BucketSidebar";

const Menus = () => {
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

  const [showBucketProduct, setShowBucketProduct] = useState(false);

  const handleCloseBucketProduct = () => setShowBucketProduct(false);
  const handleShowBucketProduct = () => setShowBucketProduct(true);

  // const [totalBucketProducts, setTotalBucketProducts] = useState(1);
  //   const addTotalBucketProducts = () => {
  //     setTotalBucketProducts(totalBucketProducts + 1);
  //   }

  return (
    <>
      <BucketSidebar
        cart={cart}
        show={showBucketProduct}
        onHide={handleCloseBucketProduct}
      />
      <div className="navbar_section d-flex">
        <div className="navbar_area">
          <Navbar className="nav_bar" bg="light_" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Link className="mx-auto mobi_logo" to="/">
                <img src="/assets/img/kfc.svg" alt="kfc.svg" />
              </Link>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* <Nav.Link className="nav_cross_link">
                      <button
                        className="fa fa-times_ fa-times-circle"
                      ></button>
                    </Nav.Link> */}
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/everyday-value">
                      Everyday Value
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/make-it-a-meal">
                      Make It a Meal
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/signature-box">
                      Singnature Boxes
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/sharing">
                      Sharing
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/promotions">
                      Promotions
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/snacks">
                      Snacks
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navlink">
                    <Link className="link" to="/collection/midnight-deals">
                      Midnight Deals
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="cart_area pt-1 d-flex justify-content-end align-items-start">
          <button
            className="cart-btn ml-auto me-3 d-flex justify-content-end align-items-center"
            style={{
              outline: "none",
              boxShadow: "none",
              border: 0,
              backgroundColor: "transparent",
            }}
            onClick={handleShowBucketProduct}
          >
            <div className="cart-card bg-dark- rounded-0 ml-auto border-0 text-white">
              <img
                className="card-img rounded-0"
                src="/assets/img/cart-icon.jpg"
                alt="cart-icon.jpg"
              />
              <div className="text-div d-flex justify-content-center align-items-center">
                <p className="card-text num_of_cart d-inline-block m-0 font-weight-bold">
                  {/* 1 */}
                  {cart.length}
                </p>
              </div>
            </div>
            <p className="m-0 cart-price col-primary tab-large-hide">
              {/* 0 */}
              {totalBucketPrice}
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menus;
