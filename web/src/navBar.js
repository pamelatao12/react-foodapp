import React, { useState } from "react";
import classNames from "classnames";
import styles from "./navBar.module.css";

const NavBar = () => {
  const [state, setState] = useState({
    isNavOpen: false
  });

  const toggleIsNavOpen = () => {
    setState(state => ({
      ...state,
      isNavOpen: !state.isNavOpen
    }));
  };

  // const hamburgerIcon = "&#9776;"

  return (
    <>
      <div id={styles.navbtn}>
        <span onClick={toggleIsNavOpen}>&#9776;</span>
      </div>

      <div
        id={styles.mySidenav}
        className={classNames(
          styles.sidenav,
          state.isNavOpen ? styles.isOpen : styles.isClosed
        )}
      >
        <a className={styles.closebtn} onClick={toggleIsNavOpen}>
          &times;
        </a>
        {/*<a href="pamela.html">HOME</a>
    	  <a href="about.html">ABOUT</a>
    	  <a href="blog.html">BLOG</a>
    	  <a href="projects.html">PROJECT</a>
    	  <a href="contact.html">CONTACT</a>
    	  <a href="https://www.facebook.com/downtownithaca" class="icon-side"><img src="images/linkedin.svg" alt="li" /></a>
    	  <a href="https://www.youtube.com/user/downtownithaca" class="icon-side"><img src="images/github.svg" alt="gh"></a>
    	  <a href="https://twitter.com/downtownithaca" class="icon-side"><img src="images/mail.svg" alt="m"></a>*/}
      </div>
    </>
  );
};

export default NavBar;
