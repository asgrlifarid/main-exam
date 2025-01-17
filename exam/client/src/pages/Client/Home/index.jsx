import React from "react";
import styles from "./index.module.scss";
import ClientProducts from "../ClientProducts";
const Home = () => {
  return (
    <main style={{paddingTop:30}}>
      <section id={styles.banner}>
        <div className="container">
          <div className={styles.banner}>
            <p>Spring / Summer Collection 2017</p>
            <h1>Get up to 30% Off <br />New Arrivals</h1>
            <button><p>SHOP NOW</p></button>
          </div>
        </div>
      </section>
      <section id={styles.banner2}>
        <ClientProducts/>
      </section>
    </main>
  );
};

export default Home;
