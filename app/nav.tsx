"use client";

import styles from "./nav.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

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
      <button className={styles.menu_button}>
        <Image
          src="images/menu-icon.svg"
          alt="menu"
          width={25}
          height={25}
        ></Image>
      </button>
    </nav>
  );
}
