'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname()

  const isActiveLink = (link) => {
    if (link === pathname) return 'text-orange-700'
    return 'text-slate-200' 
  }
  return (
    <div className= "w-full text-slate-200 text-xs pt-5 fixed flex justify-between px-10"> 
      <section>
        Chantelle Conlon Scoullar
      </section>
      <section
        className= "flex justify-end space-x-5"
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