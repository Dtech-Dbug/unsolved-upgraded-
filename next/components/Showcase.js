import React from "react";
import Styles from "../styles/Home.module.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default function Showcase() {
  return (
    <div className={Styles.showcaseContainer}>
      <section>
        <div className={Styles.showcaseHeader}>
          The new way to learn is -> together
        </div>
        <div className={Styles.ShowcaseInfo}>
          Everything you need to accelerate learning & collaboration in your
          community
        </div>

        <main className={Styles.mainList}>
          <div className={Styles.singleListItem}>
            <p className={Styles.singleListItemSymbol}></p>
            <ul className={Styles.sinleListItemList}>
              <li>
                <h4>one</h4>
              </li>
              <li>hmmmm</li>
            </ul>
          </div>
          <div className={Styles.singleListItem}>
            <p className={Styles.singleListItemSymbol}></p>
            <ul className={Styles.sinleListItemList}>
              <li>
                <h4>one</h4>
              </li>
              <li>hmmmm</li>
            </ul>
          </div>
          <div className={Styles.singleListItem}>
            <p className={Styles.singleListItemSymbol}></p>
            <ul className={Styles.sinleListItemList}>
              <li>
                <h4>one</h4>
              </li>
              <li>hmmmm</li>
            </ul>
          </div>
        </main>

        <img
          className={Styles.showcaseImage}
          src="https://unsolved.network/assets/home/features_ext/1-c6b96447ca34b7f68bd27b6808bbb2d23621ff8f0077222fe447c19ec371a58f.png"
          style={{ background: "Yellow" }}
        ></img>
      </section>
    </div>
  );
}
