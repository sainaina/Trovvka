import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { FooterComponent } from './FooterComponent'
import { Outlet } from 'react-router-dom'
import { NavbarNotLoginComponent } from './NavbarNotLoginComponent'

export const MainLayout = () => {
  return (
    <>
        <header>
          {/* <NavbarComponent/> */}
          <NavbarNotLoginComponent/>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
          <FooterComponent/>
        </footer>
    </>
  )
}
