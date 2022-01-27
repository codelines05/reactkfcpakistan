/* eslint-disable no-unused-vars */
import BrandingDots from "../brandingbots/BrandingDots";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="top-footer d-flex align-items-start">
        <Link className="m-auto" to="/">
          <img
            className="img-fluid"
            src="/assets/img/footer-logo.jpg"
            alt="footer-logo.jpg"
          />
        </Link>
        <div className="back-to-top-btn d-flex align-items-center">
          <span
            className="icon-left-arrow icon-circle-up- ico me-1"
            style={{ transform: "rotate(90deg)" }}
          ></span>
          <span
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
                /* you can also use 'auto' behaviour in place of 'smooth' */
              })
            }
          >
            Back to Top
          </span>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer_links">
          <h6>Information</h6>
          <ul className="footer_menus">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Mitao Bhook</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/" className="thick_menu">
                Carrers
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <h6>Food</h6>
          <ul className="footer_menus">
            <li>
              <Link to="/">Our Secret Recipe</Link>
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <h6>Locations</h6>
          <ul className="footer_menus">
            <li>
              <Link to="/">Find a Store</Link>
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <h6>Get in Touch</h6>
          <ul className="footer_menus">
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Join Us</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="footer_links">
          <ul className="footer_menus">
            <li>
              <img
                className="img-fluid"
                src="/assets/img/app-store.jpg"
                alt="app-store.jpg"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/kfc-pakistan/id1480491422",
                    "_blank"
                  )
                }
              />
            </li>
            <li>
              <img
                className="img-fluid"
                src="/assets/img/google-play.jpg"
                alt="google-play.jpg"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=io.bramerz.kfc&hl=en",
                    "_blank"
                  )
                }
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="copright-div text-center">
        <p className="m-0">© 2022 KFC Pakistan. All rights reserved.</p>
        <p>
          <span
            onClick={() => window.open("https://fishry.com/home", "_blank")}
            title="eCommerce"
          >
            eCommerce
          </span>{" "}
          {"by"}{" "}
          <span
            onClick={() => window.open("https://fishry.com/home", "_blank")}
            title="Fishry"
          >
            Fishry
          </span>
        </p>
      </div>
      <BrandingDots />
    </div>
  );
}

export default Footer;
