import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'


const status = "notauthenticated"

const AuthLinks = () => {
  return <>
  {status === "notauthenticated" ? (
    <Link href="/login">Loign</Link>
  ) : (
    <>
    <Link href="/write">Write</Link>
    <span>Logout</span>
    </>
  )}
  </>
}

export default AuthLinks