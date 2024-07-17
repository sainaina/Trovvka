import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { FooterComponent } from './FooterComponent'
import { Outlet } from 'react-router-dom'
import { NavbarNotLoginComponent } from './NavbarNotLoginComponent'
export const MainLayout = () => {
  return (
    <>
         <Metadata
          title="Service-TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.pinimg.com/736x/c3/95/44/c3954438fedca66f0f57c727f5dd236c.jpg"
        />
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
