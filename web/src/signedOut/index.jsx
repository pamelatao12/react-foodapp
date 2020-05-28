import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import { AuthenticationContext } from "../common/authentication/context";
import CreateAccount from "./createAccount";

const SignedOutPage = () => {
  const [input, setInput] = useState({});
  const { logIn } = useContext(AuthenticationContext);

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = input;

    try {
      await logIn(email, password, "/events");
    } catch (error) {
      alert(error);
    }
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
          <div className={styles.header}>Login</div>
          <div className={styles.inputWrapper}>
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
            Login
          </button>
          <button className={styles.createAccountButton} type="submit">
            Create an account
          </button>
        </form>
      </div>
      <CreateAccount />
    </div>
  );
};

export default SignedOutPage;
