// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>Welcome to Magic Forest</h1>
      <div className={styles.menuButtons}>
        <Link to="/choose-class" className={styles.startGameButton}>
          Enter
        </Link>
       
      </div>
    </div>
  );
};

export default Menu;
