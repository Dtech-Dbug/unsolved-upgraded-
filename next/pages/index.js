import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Nav navLinkOne="Blog" navLinkTwo="Login" />
      <Intro />
    </div>
  );
}
