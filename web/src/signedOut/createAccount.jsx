import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import firebase from "firebase";
import { AuthenticationContext } from "../common/authentication/context";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [input, setInput] = useState({});
  const { createAccount } = useContext(AuthenticationContext);

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = input;

    await createAccount(email, password);
  };

  const [pwInput, setPwInput] = useState("password");
  const [viewSetting, setViewSetting] = useState("Show");

  const handleViewPassword = () => {
    pwInput === "password" ? setPwInput("text") : setPwInput("password");
    viewSetting === "Show" ? setViewSetting("Hide") : setViewSetting("Show");
  };

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.signIn}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Link to="/login" className={styles.backButton}>
            <button className={styles.backBtn}>Back</button>
          </Link>
          <div className={styles.header}>Create Account</div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <label className={styles.label}>First Name</label>
              <input
                className={styles.textbox}
                type="text"
                name="first"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <label className={styles.label}>Last Name</label>
              <input
                className={styles.textbox}
                type="text"
                name="last"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.textbox}
                type="text"
                name="email"
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.input}>
              <label className={styles.label}>Password</label>
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
          </div>
          <button className={styles.button} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
