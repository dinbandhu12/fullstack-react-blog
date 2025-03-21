import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/fb.png" alt="facebook" width={24} height={24} />
        <Image src="/in.png" alt="instagram" width={24} height={24} />
        <Image src="/x.png" alt="tiktok" width={24} height={24} />
        <Image src="/li.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>dbs blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar