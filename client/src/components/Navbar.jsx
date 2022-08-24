import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { useState } from "react";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const authLinks = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light floorGroup p-3">
      <div className="container-fluid">
        <img src={logo} className="img-fluid" alt="alt" />
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" id="collapseBtn"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mx-3" id="navbarUl">
            <li className="nav-item m-2">
              <Link to="/" className="nav-link" id="sabLink">
                HOME
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/about-us" className="nav-link" id="sabLink">
                ABOUT US
              </Link>
            </li>
            <div className="nav-item dropdown">
              <Link to="/services" className="nav-link pt-3" id="sabLink">
                SERVICES
              </Link>
              <div className="dropdown-content">
                <a href="/flooring" className="dropdown-item">
                  Flooring
                </a>
                <a href="/supply-and-installation" className="dropdown-item">
                  Supply And Installation
                </a>
              </div>
            </div>

            <div className="nav-item dropdown">
              <Link to="/products" className="nav-link pt-3" id="sabLink">
                PRODUCTS
              </Link>
              <div className="dropdown-content">
                <a href="/laminate" className="dropdown-item">
                  Laminate
                </a>
                <a href="/hybrid" className="dropdown-item">
                  Hybrid
                </a>
                <a href="/engineered-flooring" className="dropdown-item">
                  Engineered Flooring
                </a>
                <a href="/parquetry-flooring" className="dropdown-item">
                  Parquetry Flooring
                </a>
              </div>
            </div>
            <li className="nav-item m-2">
              <Link to="/gallery" className="nav-link" id="sabLink">
                GALLERY
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/contact-us" className="nav-link" id="sabLink">
                CONTACT US
              </Link>
            </li>
            <form className="form-inline" id="search_navbar">
              <div className="d-flex">
                <input
                  className="form-control mr-sm-2 mt-2"
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => handleChange(e)}
                />
                <Link to={`/${keyword}`}>
                  <i
                    className="fa-solid fa-magnifying-glass m-3"
                    id="seacrh_icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                  ></i>
                </Link>
              </div>
            </form>

            <div className="p-2">
              <a onClick={logout} href="/" className="logoutA">
                <i className="fas fa-sign-out-alt logoutIcon"></i>
                <span className="hide-sm logoutBtn">Logout</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
  const guestLinks = (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3">
        <div className="container-fluid">
          <img src={logo} className="img-fluid" alt="alt" />
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" id="collapseBtn"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav" id="navbarUl">
              <li className="nav-item m-2">
                <Link to="/" className="nav-link" id="sabLink">
                  HOME
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link to="/about-us" className="nav-link" id="sabLink">
                  ABOUT US
                </Link>
              </li>
              <div className="nav-item dropdown m-2">
                <Link to="/services" className="nav-link " id="sabLink">
                  SERVICES
                </Link>
                <div className="dropdown-content">
                  <a href="/flooring" className="dropdown-item">
                    Flooring
                  </a>
                  <a href="/supply-and-installation" className="dropdown-item">
                    Supply And Installation
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown m-2">
                <Link to="/products" className="nav-link " id="sabLink">
                  PRODUCTS
                </Link>
                <div className="dropdown-content">
                  <a href="/laminate" className="dropdown-item">
                    Laminate
                  </a>
                  <a href="/hybrid" className="dropdown-item">
                    Hybrid
                  </a>
                  <a href="/engineered-flooring" className="dropdown-item">
                    Engineered Flooring
                  </a>
                  <a href="/parquetry-flooring" className="dropdown-item">
                    Parquetry Flooring
                  </a>
                </div>
              </div>
              {/* <li className="nav-item m-2">
                            <Link to="/products" className="nav-link" id="sabLink">PRODUCTS</Link>
                        </li> */}
              <li className="nav-item m-2">
                <Link to="/gallery" className="nav-link" id="sabLink">
                  GALLERY
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link to="/contact-us" className="nav-link" id="sabLink">
                  CONTACT US
                </Link>
              </li>
              <form className="form-inline" id="search_navbar">
                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => handleChange(e)}
                />
                {/* <button><Link to={`/search/product/${keyword}`}>search</Link></button> */}
              </form>
              {/* <div className='searchCollapse'>
                            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                <input className="form-control card card-body" type="text" placeholder="Search" id="searchInput" />
                            </div>
                        </div> */}
              <div className="searchIcon m-2">
                <Link to={`/${keyword}`}>
                  <i
                    className="fa-solid fa-magnifying-glass m-2"
                    id="seacrh_icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                  ></i>
                </Link>
                <i className="fa-solid fa-user userIcon m-2"></i>
                <Link to="/login" className="signLink p-3">
                  Login
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/* {products.length ? <SearchProducts data={products} /> : null} */}
    </div>
  );
  return (
    <section className="">
      <div id="mainContent"></div>
      {!loading && <div>{isAuthenticated ? authLinks : guestLinks}</div>}
    </section>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
