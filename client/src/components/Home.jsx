import React, { useEffect } from "react";
import css from "./Home.module.css";
import axios from "axios";

const Home = ({setBar}) => {

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("http://localhost:3001/auth/verify");
        if (res.data.login) {
          setBar(res.data.role);
        } else {
          setBar("");
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyUser();
  }, [setBar]);

  return (
    <div className={css.hero}>
      <div className={css.hero_content}>
        <h1 className={css.hero_text}>Book Shop</h1>
        <p className={css.description}>
          The best books for inspiration, knowledge, and relaxation – find
          yours! Discover a world of captivating stories, thrilling adventures,
          and invaluable knowledge in our bookshop.
        </p>
      </div>
      <div className={css.hero_image}></div>
    </div>
  );
};

export default Home;
