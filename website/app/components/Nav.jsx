"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Nav = () => {
  const pathname = usePathname()
  const [smallScreen, setSmallScreen] = useState(false)
  const [showNavItems, setShowNavItems] = useState(false)

  const checkScreenSize = () => {
    window.innerWidth <= 700 
      ? setSmallScreen(true)
      : setSmallScreen(false)
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
    <div className= "w-full text-neutral-400 text-sm pt-3 fixed flex justify-between px-10"> 
      { smallScreen
          ? (
            <div className = "w-full flex justify-end">
              <div
                className = {showNavItems && `text-right`}
              >
              <button
                className="hover:text-amber-600"
                onClick = {() => setShowNavItems(!showNavItems)}> {
                showNavItems ? 'x' : 
                  <Image 
                    src = {"/images/hamburgerIcon.png"}
                    width = {17}
                    height = {17}
                  >
                  </Image>
              }
              </button>
              {
                showNavItems &&
                <div className = "flex flex-col space-y-1">
                <a
                  className="hover:text-amber-600"
                  href="/">Home</a>
                <a
                  className="hover:text-amber-600"
                  href="/projects">Projects</a>
                <a
                  className="hover:text-amber-600"
                  href="/about">About Me</a>
                <a
                  className="hover:text-amber-600"
                  href="#">Contact</a>
              </div>
              }
                        </div>
            </div>
          )
          : ( <>
              <section 
                className = "flex space-x-3 items-center"
                >
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
              </> )
      }
    </div>
  )
}