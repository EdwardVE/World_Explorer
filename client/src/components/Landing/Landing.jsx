import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Welcome to my individual project</h1>
        <button className={styles.button}>
            <Link to="/home">HOME</Link>
        </button>
        </div>
    );
    };

export default Landing;