import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/components/homepage.module.css'
import Cloud from "../components/cloud";
import Add from "../components/homecontents/add";
import Header from "../components/homecontents/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container} >
    
<Header/>
<Add/>

    </div>

  )
}
