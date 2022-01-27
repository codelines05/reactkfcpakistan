/* eslint-disable no-unused-vars */
import BrandingDots from "../../brandingbots/BrandingDots";
import "./TopHeader.css";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <BrandingDots />
        <div className="top-header d-flex justify-content-between mb-2">
          <div className="logo-div">
            <Link to="/">
              <img src="/assets/img/logo.svg" alt="" />
            </Link>
          </div>
          <div className="login-div mt-auto mb-1">
            <span className="my-location text-uppercase font-14">
              <span className="icon-placeholder-filled col-black pr-1"></span>
              <Link to="" className="link">
                <p className="d-inline-block col-black m-0">Store Location</p>
              </Link>
            </span>
            <span className="my-location text-uppercase font-14 ml-4">
              <span className="icon-user col-black pr-1"></span>
              <Link to="" className="link">
                <p className="d-inline-block col-black m-0">
                  Sign In / Register
                </p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
