import React from 'react'
import NavBar from '../../Components/NavBar'
import Signup from '../../Components/signup/signUp'
import FooterHome from '../../Components/FooterHome'

function SignUpPage() {
  return (
    <main className='bg-background'>
      <NavBar />
      <Signup />
      <FooterHome />
    </main>
  )
}

export default SignUpPage