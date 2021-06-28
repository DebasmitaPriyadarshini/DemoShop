import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  Modal,
  DropdownMenu,
} from "../../components/MaterialUI";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import Carticon from "../../img/cart.png";
import Storeicon from "../../img/shop.png";
import Homeicon from "../../img/home.png";
import Wishlisticon from "../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, signout, signup as _signup } from "../../actions";

/**
 * @author
 * @function Navigationbar
 **/

const Navigationbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const login = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(userLogin({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <div style={{ marginLeft: 10 }} onClick={() => setLoginModal(false)}>
            <a href="/myprofile">
              <img
                src={Profilepiclogo}
                style={{
                  height: 22,
                  width: 22,
                  marginBottom: "3px",
                  marginRight: "4px",
                }}
                alt="Shopisthan Logo"
              />
              <span style={{ fontSize: 15 }}> {auth.user.firstName}</span>
            </a>
          </div>
        }
        menus={[
          { label: "My Profile", href: "/myprofile", icon: null },
          { label: "Cart", href: "/cart", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            // onClick: () => {
            //   !auth.authenticate && setLoginModal(true);
            // },
          },

          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <li className="PrimaryNav-loggedOutOption-3xV">
            <a onClick={() => setLoginModal(true)}>
              <div className="PrimaryNav-a11yButtonWrap-23Z">
                <button className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl">
                  <div className="Btn-labelWrapper-1jS">
                    <div className="Btn-label-1Zf e2e-Btn-label"> Log In</div>
                  </div>
                </button>
                <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
              </div>
            </a>
          </li>
        }
        menus={[
          { label: "Shopisthan About us", href: "", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          {
            label: "Wishlist",
            href: "",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <>
      <nav className="navbar">
        <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
          <div className="CardLayout-Toaster-Container">
            <section className="CardLayout">
              <header className="CardLayout__header">
                <h1 className="spectrum-Heading1">Sign In</h1>
                <p className="EmailPage__instructions">
                  New User ?
                  <a className="spectrum-Link EmailPage__create-account-link">
                    Creat an Account
                  </a>
                </p>
              </header>
              <section className="CardLayout__content">
                <form>
                  <section className="EmailPage__email-field form-group">
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                       type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
                        onClick={login}
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        <span className="spectrum-Button-label">Submit</span>
                      </button>
                    </div>
                  </section>
                </form>
              </section>
            </section>
          </div>
        </Modal>
        <h3 className="logo">
          <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <a href="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <span>Shopisthan</span>
              </div>
            </a>
          </li>
        </h3>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link className="cart" to="/">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Homeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Home
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/ExploreStore">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Storeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Store
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/favorite">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Wishlisticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Favorite
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/cart">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Carticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Cart
                  </a>
                </div>
              </h3>
            </a>
          </Link>
        </ul>
        <div className="PrimaryNav-signup-Yf6">
          <ul className="PrimaryNav-loggedOutOptions-1SQ">
            {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          </ul>
        </div>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="mobile-menu-icon"
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <li className="fas fa-bars"></li>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navigationbar;
