import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        
        <div className={styles.siteName}>Site Name</div>
        <div className={styles.items}>
            <div className={styles.item1}>AboutUs</div>
            <div className={styles.item2}>Contact</div>
            <button className={styles.login}>Log In</button>
        </div>
      
    </div>
  )
}

export default Navbar
