"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Nav = () => {
  const pathname = usePathname()
  const [smallScreen, setSmallScreen] = useState(false)

  const checkScreenSize = () => {
    {console.log('resizing window')}
    window.innerWidth <= 700 
      ? setSmallScreen(true)
      : setSmallScreen(false)
      console.log(smallScreen)
  }

  useEffect(() => {
    checkScreenSize()
  }, []);

  useEffect(() => {
      window.addEventListener( 'resize', checkScreenSize)
  }, []);

  const isActiveLink = (link) => {
    if (link === pathname) return 'text-amber-600 font-bold'
    return 'text-neutral-400' 
  }
  // if screen size small then collapse navbar
  return (
    <div >
      { smallScreen
          ? (
            <div> small screen </div>
          )
          : (
            <div className= "w-full text-neutral-400 text-sm pt-3 fixed flex justify-between px-10"> 
              <section className = "flex space-x-3 items-center">
                <Image
                  src ={"/images/me.jpeg"}
                  alt="Picture of laptop" 
                  className = "rounded-full"
                  width = {45}
                  height = {45} >
                </Image>
                <p>Chantelle Conlon Scoullar</p>
              </section>
              <section
                className= "flex justify-end space-x-5 pt-2"
                style = {{backgroundColor: '#1A1A1A'}}>
                  <Link 
                    href = '/' 
                    className = {isActiveLink('/')}
                  >
                    Home</Link>
                  <Link 
                    href = '/projects'
                    className = {isActiveLink('/projects')}
                  >
                    Recent Projects</Link>
                  <Link 
                    href = '/about'
                    className = {isActiveLink('/about')}
                  >
                    About Me</Link>
                  <div>Contact</div>
                </section>
            </div>
        )
      }
    </div>
  )
}