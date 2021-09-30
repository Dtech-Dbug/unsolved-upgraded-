import React from "react";
import Styles from "../styles/Home.module.css";

const gridOne = (heading, info, link, btnText, figCaption) => {
  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.introHeader}>{heading}</div>
        <div className={Styles.introInfo}>{info}</div>

        <div className="intro-cta">
          {btnText && (
            <>
              <button className={Styles.introCTA}>{btnText}</button>
              <figcaption>{figCaption}</figcaption>
            </>
          )}
        </div>
        <iframe
          src={link}
          frameborder="0"
          style={{ background: "Yellow" }}
        ></iframe>
      </section>
    </>
  );
};

export default function Intro() {
  return (
    <>
      <div className={Styles.container}>
        {gridOne(
          "Build a community that learns together",
          "Host & Monetise learning communities with Courses, Challenges, Shared Knowledge, Group Discussions & more",
          "https://youtu.be/Z62oH44EP1s",
          "launch"
        )}

        {gridOne(
          "Your brand. Your domain. Your app",
          "Teach, Learn, Discuss all under your under brand"
        )}
      </div>
    </>
  );
}
