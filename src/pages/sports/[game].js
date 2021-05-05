import React from "react";
import { useRouter } from 'next/router';
import Header from "../../components/homecontents/header";
import styles from "../../../styles/components/sports.module.css"


const Game=()=>{

    const router=useRouter()
    const {game}=router.query;
    return(
        <div className={styles.container}>
<Header/>
<div className={styles.text}>
This is dynamically generated sport page for {game}
</div>

        </div>
    )
}

export default Game;