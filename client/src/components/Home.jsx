import React from "react";
import css from "./Home.module.css";
// import hero from '../assets/hero.jpg'

const Home = () => {
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
      <div className={css.hero_image}>
        {/* <img src={hero} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
