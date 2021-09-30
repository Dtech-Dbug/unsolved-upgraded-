import React from "react";
import Styles from "../styles/Home.module.css";

export default function Nav({ navLinkOne, navLinkTwo }) {
  return (
    <nav className={Styles.nav}>
      <h2>
        <span style={{ color: "yellow" }}>Un</span>Solved
      </h2>

      <ul>
        <li>{navLinkOne}</li>
        <li>{navLinkTwo}</li>
      </ul>
    </nav>
  );
}
