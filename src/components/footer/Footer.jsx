import React from 'react'
import styles from './favbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt='dbs blog' width={50} height={50} />
          <h1 className={styles.logoText}>DBS Blog</h1>     
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam veniam cumque inventore iste aspernatur corrupti, laborum exercitationem, alias debitis eveniet dicta ab veritatis voluptatum sed quae rerum sapiente ut deleniti!
        </p>
        <div className={styles.icons}>
          <Image src="/fb.png" alt='' width={18} height={18} />
          <Image src="/in.png" alt='' width={18} height={18} />
          <Image src="/x.png" alt='' width={18} height={18} />
          <Image src="/li.png" alt='' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Privacy Policy</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Styles</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>YouTube</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer