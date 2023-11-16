"use client";

import styles from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [displayScreen, displayScreenApi] = useState("none");
  const routes = [
    {
      link: "/",
      title: "home",
    },
    {
      link: "/projects",
      title: "projects",
    },
    {
      link: "/experience",
      title: "experience",
    },
    {
      link: "/contact",
      title: "contact me",
    },
  ];

  const toggleDiplayScreen = () => {
    displayScreenApi(displayScreen == "none" ? "initial" : "none");
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h2>Alex Haszard</h2>
      </Link>
      <ul>
        {routes.map((m) => {
          return (
            <li key={m.title}>
              <Link href={m.link}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
      <button className={styles.menu_button} onClick={toggleDiplayScreen}>
        <Image
          src="images/menu-icon.svg"
          alt="menu"
          width={25}
          height={25}
        ></Image>
      </button>
      <div className={styles.menu_screen} style={{ display: displayScreen }}>
        <Link href="/" onClick={toggleDiplayScreen}>
          <h2>Alex Haszard</h2>
        </Link>
        <button className={styles.close} onClick={toggleDiplayScreen}>
          X
        </button>
        <ul>
          {routes.map((m) => {
            return (
              <li key={m.title}>
                <Link href={m.link} onClick={toggleDiplayScreen}>
                  {m.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
