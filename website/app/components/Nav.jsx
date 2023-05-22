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
    window.innerWidth <= 640 
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
    if (link === pathname) return 'text-[#F6A693] font-light'
    return 'text-neutral-400' 
  }
  // if screen size small then collapse navbar
  return (
    <div 
      className= "w-full text-neutral-400 text-sm pt-3 flex justify-between px-10 font-light fixed top-0"
      style = {{ backgroundColor: '#191919' }}
      > 
      { smallScreen
          ? (
            <div className = "w-full flex justify-end">
              <div
                className = {showNavItems && `text-right`}
              >
              <button
                className="hover:text-[#F6A693]"
                onClick = {() => setShowNavItems(!showNavItems)}> {
                showNavItems ? 'x' : 
                  <Image 
                    src = {"/images/icons/hamburgerIcon.png"}
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
                  className="hover:text-[#F6A693]"
                  href="/">Home</a>
                <a
                  className="hover:text-[#F6A693]"
                  href="/projects">Projects</a>
                <a
                  className="hover:text-[#F6A693]"
                  href="/about">About Me</a>
                <a
                  className="hover:text-[#F6A693]"
                  href="/contact">Contact</a>
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
                  className = "rounded-full mb-2"
                  width = {35}
                  height = {35} >
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
                  > About </Link>
                  <Link 
                    href = '/contact'
                    className = {isActiveLink('/contact')}
                  > Contact </Link>
                </section>
              </> )
      }
    </div>
  )
}