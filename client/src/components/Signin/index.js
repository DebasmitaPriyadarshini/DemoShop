import React, { useState } from 'react'
import {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu,
  } from "../MaterialUI";
import Shopisthan__logo_bolte from "../../img/shopisthan_logo_bolte.png";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../actions';

const Signin = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector(state=>state.auth)
  const  dispatch = useDispatch();
  const {show,handleclose} = props;

  const login = () => {
 
      dispatch(userLogin({ email, password }));
      handleclose(false)

  };

    return (
        <> 
    <Modal visible={show} onClose={() => handleclose(false)}>
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
             {/* <Modal visible={show} onClose={() => handleclose(false)}>
          <div className="authContainer">
            <div className="row">
              <div className="leftspace">
                <img
                  style={{ width: 70, height: 70 }}
                  src={Shopisthan__logo_bolte}
                  alt="Shopisthan Logo"
                />
                <h2 style={{ marginTop: 10 }}>Login</h2>
                <p style={{ fontSize: 15, marginTop: 10 }}>
                  An effort to give everyone a Commerce Store – even if you are
                  selling from home or from multiple locations.
                </p>
              </div>
              <div className="rightspace">
                <div
                  className="loginInputContainer"
                  style={{ width: 250, marginTop: 20 }}
                >
                  {auth.error && (
                    <div style={{ color: "red", fontSize: 12 }}>
                      {auth.error}
                    </div>
                  )}
                 
                  <MaterialInput
                    type="text"
                    label="Email/Mobile Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MaterialInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MaterialButton
                    title={"Login"}
                    bgColor="#fb641b"
                    textColor="#ffffff"
                    style={{
                      margin: "40px 0 20px 0",
                    }}
                    onClick={login}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal> */}
        </>
    )
}

export default Signin

