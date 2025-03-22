"use client"

import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider



// TODO: 
// If you forgot how to get google auth id watch this video
// https://www.youtube.com/shorts/WABhO9KsOpU
