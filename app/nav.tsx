"use client";

import styles from "./nav.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const router = useRouter();
  const [displayScreen, displayScreenApi] = useState("none");

  const toggleDiplayScreen = () => {
    displayScreenApi(displayScreen == "none" ? "initial" : "none");
  };

  const toggleDiplayScreenAndRoute = (route: string) => {
    displayScreenApi(displayScreen == "none" ? "initial" : "none");
    router.push(route);
  };

  return (
    <nav className={styles.nav}>
      <button onClick={() => router.push("/")}>
        <h2>Alex Haszard</h2>
      </button>
      <ul>
        <li>
          <button onClick={() => router.push("/")}>home</button>
        </li>
        <li>
          <button onClick={() => router.push("/projects")}>projects</button>
        </li>
        <li>
          <button onClick={() => router.push("/experience")}>experience</button>
        </li>
        <li>
          <button onClick={() => router.push("/contact")}>contact me</button>
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
        <button onClick={() => router.push("/")}>
          <h2>Alex Haszard</h2>
        </button>
        <button onClick={toggleDiplayScreen}>X</button>
        <ul>
          <li>
            <button onClick={() => toggleDiplayScreenAndRoute("/")}>
              home
            </button>
          </li>
          <li>
            <button onClick={() => toggleDiplayScreenAndRoute("/projects")}>
              projects
            </button>
          </li>
          <li>
            <button onClick={() => toggleDiplayScreenAndRoute("/experience")}>
              experience
            </button>
          </li>
          <li>
            <button onClick={() => toggleDiplayScreenAndRoute("/contact")}>
              contact me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
