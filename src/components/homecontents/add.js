import React from "react";
import styles from "../../../styles/components/add.module.css";


const Add =()=>{
    return(
        <div className={styles.addbox}>
        <div className={styles.addboxin}>
         <p className={styles.addtext}>Get next years pass now to save</p>
        </div>
        <div className={styles.paragraph}>
            <p className={styles.paratext}>If it's too steep, you're too old. Straight shot shane mcconkey lookout pass snowmass bode miller freestyle tree well durango corn snow bromley mountain. Stockli st moritz sundown ripping the bumps swix chowder boreal suzy chaffee bumps hospital air kastle.
</p>
        </div>


        <div className={styles.buttonholder}>
<button className={styles.passbutton} name="pass-button">Get a seasons pass</button>
<button className={styles.ticketbutton} name="ticket-button">Get tickets</button>

        </div>
        </div>
    )
}

export default Add;