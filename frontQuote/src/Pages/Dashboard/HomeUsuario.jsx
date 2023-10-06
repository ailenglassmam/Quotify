import React from 'react'
import NavbarDashboard from './componentesDashboard/NavbarDashboard'
import Workspace from './routesDashboard/Workspace'
import FooterDashboard from './componentesDashboard/FooterDashboard'

export default function HomeUsuario() {
  return (
    <>
      <NavbarDashboard></NavbarDashboard>
      <Workspace></Workspace>
      <FooterDashboard></FooterDashboard>
    </>
  )
}