import React from "react";
import styles from "../../../styles/components/homepage.module.css"
import Link from "next/link"
import Cloud from "../cloud"


const Header=()=>{
    return(
        <div className={styles.navbar}>


        <div className={styles.logo}>
          <span className={styles.logotext}><Link href="/">Amazing mountain</Link></span>
        </div>
        <div className={styles.leftbar}>
          <div className={styles.navbutton}>
            <ul className={styles.list}>
              <li className={styles.listitem}><Link href="/sports" >ski</Link></li>
              <li className={styles.listitem}> <Link href="/sports/golf" >golf</Link></li>
              <li className={styles.listitem}><Link href="/sports/hiking" >hiking</Link></li>
              <li className={styles.listitem}><Link href="/sports/contact" >contact</Link></li>
            </ul>
          </div>
          <div className={styles.weather}>
          <div className={styles.cloud}>
           <Cloud/>
          </div>
       <div className={styles.forecarst}>
        <div className={styles.temp}><span className={styles.temptext}> Current weather -6°C </span>  </div>
        <div className={styles.snowfall}><span className={styles.snowtext}> Recent snowfall 32cm </span>  </div>
       </div>
          </div>
      
        </div>

      </div>
    )
}

export default Header;