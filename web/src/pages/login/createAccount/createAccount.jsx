import React, { useContext, useState } from "react";
import styles from "../index.module.scss";
import firebase from "firebase";
import { AuthenticationContext } from "../common/authentication/context";
import { Link } from "react-router-dom";
import CreateAccountConfirmation from "./createAccountConfirmation";

const CreateAccount = () => {
  const [input, setInput] = useState({});
  const { createAccount } = useContext(AuthenticationContext);

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const { first, last, email, password } = input;
    let inputsHaveError = false;

    if (!password || password.length < 6) {
      setPasswordError(true);
      inputsHaveError = true;
    } else {
      setPasswordError(false);
    }

    if (!first) {
      setFirstNameError(true);
      inputsHaveError = true;
    } else {
      setFirstNameError(false);
    }

    if (!last) {
      setLastNameError(true);
      inputsHaveError = true;
    } else {
      setLastNameError(false);
    }

    if (!email) {
      setEmailError(true);
      inputsHaveError = true;
    } else {
      setEmailError(false);
    }

    if (inputsHaveError) {
      return;
    }

    await createAccount(first, last, email, password);
    setAccountCreated(true);
  };

  const [pwInput, setPwInput] = useState("password");
  const [viewSetting, setViewSetting] = useState("🙈");

  const handleViewPassword = () => {
    pwInput === "password" ? setPwInput("text") : setPwInput("password");
    viewSetting === "🙈" ? setViewSetting("🙉") : setViewSetting("🙈");
  };

  const handleFirstNameInput = () => {
    if (!firstNameError) {
      return (
        <div className={styles.input}>
          <label className={styles.label}>First Name*</label>
          <input
            className={styles.textbox}
            type="text"
            name="first"
            value={input.first ? input.first : ""}
            onChange={handleInputChange}
          />
        </div>
      );
    } else {
      return (
        <>
          <div className={styles.input}>
            <label className={styles.label}>First Name*</label>
            <input
              className={styles.textboxError}
              type="text"
              name="first"
              value={input.first ? input.first : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.errorMessage}>
            *First name is a required field
          </div>
        </>
      );
    }
  };

  const handleLastNameInput = () => {
    if (!lastNameError) {
      return (
        <div className={styles.input}>
          <label className={styles.label}>Last Name*</label>
          <input
            className={styles.textbox}
            type="text"
            name="last"
            value={input.last ? input.last : ""}
            onChange={handleInputChange}
          />
        </div>
      );
    } else {
      return (
        <>
          <div className={styles.input}>
            <label className={styles.label}>Last Name*</label>
            <input
              className={styles.textboxError}
              type="text"
              name="last"
              value={input.last ? input.last : ""}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.errorMessage}>
            *Last name is a required field
          </div>
        </>
      );
    }
  };

  const handleEmailInput = () => {
    if (!emailError) {
      return (
        <div className={styles.input}>
          <label className={styles.label}>Email*</label>
          <input
            className={styles.textbox}
            type="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
      );
    } else {
      return (
        <>
          <div className={styles.input}>
            <label className={styles.label}>Email*</label>
            <input
              className={styles.textboxError}
              type="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.errorMessage}>*Email is a required field</div>
        </>
      );
    }
  };

  const handlePasswordLength = () => {
    if (passwordError) {
      return (
        <>
          <div className={styles.input}>
            <label className={styles.label}>Password*</label>
            <input
              className={styles.textboxError}
              type={pwInput}
              name="password"
              onChange={handleInputChange}
            />
            <span className={styles.span} onClick={handleViewPassword}>
              {viewSetting}
            </span>
          </div>
          <div className={styles.errorMessage}>
            *Password must be at least 6 characters
          </div>
        </>
      );
    } else {
      return (
        <div className={styles.input}>
          <label className={styles.label}>Password*</label>
          <input
            className={styles.textbox}
            type={pwInput}
            name="password"
            onChange={handleInputChange}
          />
          <span className={styles.span} onClick={handleViewPassword}>
            {viewSetting}
          </span>
        </div>
      );
    }
  };

  const [accountCreated, setAccountCreated] = useState(false);

  const createAccountForm = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Link to="/login" className={styles.backButton}>
        <button className={styles.backBtn}>
          <span>&#8592;</span>Back
        </button>
      </Link>
      <div className={styles.createAccountHeader}>Create Account</div>
      <div className={styles.inputWrapper}>
        {handleFirstNameInput()}
        {handleLastNameInput()}
        {handleEmailInput()}
        {handlePasswordLength()}
      </div>
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );

  return (
    <div className={styles.bodyWrapper}>
      <Link to="/" className={styles.homeLogoButton}>
        <img className={styles.siteLogo} src="./logo.png" alt="logo" />
      </Link>
      <div className={styles.signIn}>
        {accountCreated ? <CreateAccountConfirmation /> : createAccountForm}
      </div>
    </div>
  );
};

export default CreateAccount;
