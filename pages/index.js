import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.mainSection}>
      {/* <Navbar /> */}
      <div className={styles.heroSection}>

        <h1>Coffee Served Right</h1>
        <p>loremIrure in officia ex sint occaecat deserunt qui sunt. Eiusmod elit enim dolore est sunt non nisi sint ad duis nulla sit dolor ea. Non anim mollit dolore eiusmod in sit mollit commodo commodo.</p>
      </div>
    </div>
  )
}
