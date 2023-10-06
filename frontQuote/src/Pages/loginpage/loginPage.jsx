import React from 'react'
import NavBar from '../../Components/NavBar'
import Login from '../../Components/login/login'
import FooterHome from '../../Components/FooterHome'

function LoginPage() {
  return (
    <main className='bg-background'>
      <NavBar />
      <Login />
      <FooterHome />
    </main>
  )
}

export default LoginPage