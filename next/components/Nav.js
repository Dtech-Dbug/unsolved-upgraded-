import React from "react";
import Styles from "../styles/Home.module.css";

export default function Nav() {
  return (
    <nav className={Styles.nav}>
      <h2>Logo</h2>

      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </nav>
  );
}
