"use client"

import { smallLightBtn } from "./TailwindStyles"
import data from "data/projects.json"
import { BlurImage } from "./components/BlurImage"
import React from "react"
import { SmallTick } from "./components/SmallTick"
import Link from "next/link"
import { MainProjectSkill } from "./components/MainProjectSkill"
import { ContactLinks } from "./components/ContactLinks"
import { ContactForm } from "./components/ContactForm"

export default function Home() {
  const projects = data.projects
  const [hideImgCard, setHideImgCard] = React.useState("")

  const copyUserName = () => {
    navigator.clipboard.writeText("ChanteCon#4811")
    alert("username copied")
  }

  return (
    <>
      <div className = "flex flex-col flex-1 items-center h-100 w-[60%] text-center pt-[200px] text-neutral-300 gap-[60px]" >
        <section className = "xl:w-[50%]">
          <div className = "font-light">
            <h1 style = {{ fontSize: '28pt' }} >Hi, I'm Chantelle. I'm a</h1>
            <h1 
              className = "text-3xl text-[#F6A693]"
              style = {{ fontSize: '28pt' }}
              >
                developer.
            </h1>
            <a className = { smallLightBtn } href = "/about"> MORE </a>
          </div>
          <p className = "text-neutral-400 text-md pt-8">
          I design and build software solutions to solve real world problems. I have experience with frontend and backend web development, game development, SaaS projects and more.
          </p>
        </section>
        <section className = "flex gap-[30px] mt-[-30px]">
          <ContactLinks onClick = {() => copyUserName()}/>
        </section>
        <section className = "w-full">
          <h1 className = "text-2xl"> Projects </h1> 
          <section className = "self-center pt-[40px] text-black" >
            <div className = "flex flex-wrap text-center gap-[20px] justify-center" >
              {
              projects.map((project, idx) => 
              idx < 3 && hideImgCard === project.name
              ?
              <div
                className = "h-[200px] w-[250px] overflow-hidden bg-[#262626] text-sm text-[#F2EAE8] relative pt-[40px] p-[30px] rounded-xl"
                key = {project.name}
                onMouseLeave = { () => {setHideImgCard('')} }
              >
              <p className= " text-md " >{project.name.toUpperCase()}</p>
                <p
                  className= "pt-[15px]" > {project.descriptions.homepage}
                </p>
                 <MainProjectSkill project = {project} />
               <Link
                      className = {smallLightBtn}
                      style = {{ lineHeight: '30px' }}
                      href = {`/projects/${project.name}`}
        
                > MORE +
                </Link>
              </div>
              : idx < 3 &&
              <div
                className = "h-[200px] w-[250px] overflow-hidden relative rounded-xl"
                key = {project.name}
                onMouseOver = { () => {setHideImgCard(project.name)} }
              >
                <BlurImage
                  className = "h-[200px] w-[250px] bg-cover bg-center"
                  style = {{
                    backgroundImage: `url(${project.images.mainImage})`,
                  }}
                  >
                </BlurImage>
                <p
                  className = "text-2xl relative bottom-[120px]"
                >
                  {project.name.toUpperCase()}
                </p>
                <div
                  className = "absolute top-[7px] right-[7px] w-[115px] h-[30px] bg-[#373737] rounded-3xl flex justify-between px-4"
                >
                  <p
                    className = "text-white text-sm self-center"
                  >
                    {project.skills[0].toUpperCase()}
                  </p>
                  <SmallTick />
                </div>
            </div>
              )}
            </div>
          </section>
          <a 
          className = "h-[30px] w-[80px] rounded-2xl bg-[#F2EAE8] text-xs text-[#F6A693] px-[10px] self-center" 
            href = "/projects"
          > 
            {"MORE PROJECTS"}
          </a>
        </section>
        <section className = "w-full">
          <ContactForm />
        </section>
      </div>
    </>
  )
}
