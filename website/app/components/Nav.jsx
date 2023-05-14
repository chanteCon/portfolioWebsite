'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname()

  const isActiveLink = (link) => {
    if (link === pathname) return 'text-orange-700'
    return 'text-slate-200' 
  }
  return (
    <div className= "w-full text-slate-200 text-xs pt-3 fixed flex justify-between px-10"> 
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