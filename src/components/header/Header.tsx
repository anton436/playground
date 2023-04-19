import React from "react";
import styles from "./Header.module.css";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
  const { favorites } = useFavorites();
  return (
    <section className={styles.header}>
      <BsFillBookmarkHeartFill />
      <span>{favorites.length}</span>
    </section>
  );
};

export default Header;
