import React, { useContext, useState } from "react";
import styles from "../login.module.scss";
import firebase from "firebase";
import { AuthenticationContext } from "../../../common/authentication/context";
import { Link } from "react-router-dom";

const CreateAccountConfirmation = () => {
  return (
    <div className={styles.form}>
      <div className={styles.createAccountHeader}>
        Your account has been created!
      </div>
      <Link to="/login" className={styles.backButton}>
        <button className={styles.createAccountButton}>Back to login</button>
      </Link>
    </div>
  );
};

export default CreateAccountConfirmation;
