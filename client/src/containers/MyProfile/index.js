import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../Navbar";
import {
  Modal,
  DropdownMenu,
} from "../../components/MaterialUI";
import { edituserProfile } from "../../actions";

/**
 * @author
 * @function MyProfile
 **/

const MyProfile = (props) => {
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState(auth.user.firstName);
  const [lastName, setLastName] = useState(auth.user.lastName);
  const [email, setEmail] = useState(auth.user.email);
  const [userEditModal, setUserEditModal] = useState(false);
  const dispatch = useDispatch();

  const editUser = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    dispatch(edituserProfile(auth.user));
    setUserEditModal(false);
  };

  const renderUserEditModal = () => {
    return (
      <Modal
        visible={userEditModal}
        handleclose={() => setUserEditModal(false)}
        // onSubmit={editUser}
        modaltitle={`Edit Profile`}
      >
        {/* <Input
          label={"First Name"}
          placeholder={`First Name`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          label={"Enter Last Name"}
          value={lastName}
          placeholder={`Enter Last Name`}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Input
          label={"Enter Email"}
          value={email}
          placeholder={`Enter Email`}
          onChange={(e) => setEmail(e.target.value)}
        /> */}

        <section className="CardLayout__content" style={{paddingLeft:'100px'}}>
                <form>
                  <section className="EmailPage__email-field form-group">
                  <div>
                      <label className="spectrum-FieldLabel">
                        First Name
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Last Name
                      </label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Email</label>
                      <input
                       type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
                        onClick={editUser}
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        <span className="spectrum-Button-label">Submit</span>
                      </button>
                    </div>
                  </section>
                </form>
              </section>
      </Modal>
    );
  };

  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main" style={{ paddingTop: "55px" }}>
        <div className="v9tJq v9tJq">
          <header className="HVbug">
            <section className="XjzKX">
              <section className="_4dMfM">
                <section className="M-jxE">
                  <img alt="Profile Pic" className="be6sr" src={Profilepic} />
                </section>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  First Name : {auth.user.firstName}
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  Last Name : {auth.user.lastName}
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  Email Id : {auth.user.email}
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <button onClick={() => setUserEditModal(true)}>
                  Edit Profile
                </button>
              </section>
            </section>
          </header>
          {/* ProfileHEader  ends*/}
        </div>
        {renderUserEditModal()}
      </main>
    </>
  );
};

export default MyProfile;
