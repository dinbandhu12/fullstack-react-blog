"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle} style={
      theme == "dark"
        ? { backgroundColor: "white" }
        : { backgroundColor: "#0f172a" }
    }>
      <Image src="/moon.png" alt="sun" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme == "dark"
            ? {left: 1, background: "#0f172a", transition: "all 0.5s ease-in-out" }
            : {right: 1, background: "white", transition: "all 0.5s ease-in-out" }
        }
      ></div>
      <Image src="/sun.png" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
