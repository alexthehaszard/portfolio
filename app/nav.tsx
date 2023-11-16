"use client";

import styles from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [displayScreen, displayScreenApi] = useState("none");

  const toggleDiplayScreen = () => {
    displayScreenApi(displayScreen == "none" ? "initial" : "none");
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h2>Alex Haszard</h2>
      </Link>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/experience">experience</Link>
        </li>
        <li>
          <Link href="/contact">contact me</Link>
        </li>
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
          <li>
            <Link href="/" onClick={toggleDiplayScreen}>
              home
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleDiplayScreen}>
              projects
            </Link>
          </li>
          <li>
            <Link href="/experience" onClick={toggleDiplayScreen}>
              experience
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleDiplayScreen}>
              contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
