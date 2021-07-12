import React from 'react'
import Image from 'next/image'
import brandLogo from '../public/Assets/svgs/nilvo_logo.svg'
import Styles from '../styles/navbar.module.css'
export default function Navbar() {
    return <><nav className={Styles.navbar}>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>About</li>
        </ul>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>About</li>
        </ul>
    </nav>
        <div className={Styles.brandImage}><Image src={brandLogo} width="300" alt="nilvo" layout="intrinsic" /></div>
    </>
}