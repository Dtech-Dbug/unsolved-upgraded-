import React from "react";
import Styles from "../styles/Home.module.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const grid = (
  showcaseHeader,
  showcaseInfo,
  listItemOne,
  listItemOneInfo,
  listItemTwo,
  listItemTwoInfo,
  listItemThree,
  listItemThreeInfo,
  imageLink
) => {
  return (
    <>
      <section className={Styles.showcaseSection}>
        <div className={Styles.showcaseHeader}>{showcaseHeader}</div>
        <div className={Styles.ShowcaseInfo}>{showcaseInfo}</div>
      </section>

      <main className={Styles.mainList}>
        <div className={Styles.singleListItem}>
          <p className={Styles.singleListItemSymbol}></p>
          <ul className={Styles.sinleListItemList}>
            <li>
              <h4>{listItemOne}</h4>
            </li>
            <li>{listItemOneInfo}</li>
          </ul>
        </div>
        <div className={Styles.singleListItem}>
          <p className={Styles.singleListItemSymbol}></p>
          <ul className={Styles.sinleListItemList}>
            <li>
              <h4>{listItemTwo}</h4>
            </li>
            <li>{listItemTwoInfo}</li>
          </ul>
        </div>
        <div className={Styles.singleListItem}>
          <p className={Styles.singleListItemSymbol}></p>
          <ul className={Styles.sinleListItemList}>
            <li>
              <h4>{listItemThree}</h4>
            </li>
            <li>{listItemThreeInfo}</li>
          </ul>
        </div>
      </main>

      <img
        className={Styles.showcaseImage}
        src={imageLink}
        style={{ background: "Yellow" }}
      ></img>
    </>
  );
};

export default function Showcase() {
  return (
    <div className={Styles.showcaseContainer}>
      {grid(
        "The new way to learn is -> together",
        "Everything you need to accelerate learning & collaboration in your community",
        "Courses & Shared Knowledge",
        "No matter how you want to enable learning, we have you covered",
        "Challenges, Contests, Quizzes, Races",
        "Highly engaged, immersive and fast paced way to learn",
        "Threaded feed, Chat groups, Audio & Video",
        "Discussions & Networking made super easy",
        "https://unsolved.network/assets/home/features_ext/1-c6b96447ca34b7f68bd27b6808bbb2d23621ff8f0077222fe447c19ec371a58f.png"
      )}

      {grid(
        "Engage, Grow and Monetise",
        "Hosting a Learning Community is hard work. Unsolved makes it easier and rewarding",
        "Gamification",
        "Motivate members with Badges, Reputation points & more",
        "Growth",
        "Activate Invites, Referrals & Boosts to grow your community",
        "Monetisation",
        "Our propriety High Growth Funnel will turn on a monetisation funnel like you have never seen before",
        "https://unsolved.network/assets/home/features_ext/2-ecec56e987269ad20dc15cfd3bfe1693d4af0c1531a7609d7ac072b08b080908.png"
      )}
    </div>
  );
}
