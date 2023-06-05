"use client"

import data from "data/projects.json"
import { BlurImage } from "./components/BlurImage"
import React from "react"
import { SmallTick } from "./components/SmallTick"
import Link from "next/link"
import { MainProjectSkill } from "./components/MainProjectSkill"
import { ContactLinks } from "./components/ContactLinks"
import { ContactForm } from "./components/ContactForm"
import { HomePageMoreBtn } from "./components/HomePageMoreBtn"

export default function Home() {
  const projects = data.projects
  const [hideImgCard, setHideImgCard] = React.useState("")

  return (
    <>
      <div className = "flex flex-col flex-1 items-center h-100 w-[90%] sm:w-[60%] text-center pt-[100px] sm:pt-[200px] text-neutral-300 gap-[60px]" >
        <section className = "xl:w-[50%]">
          <div className = "font-light">
            <h1 style = {{ fontSize: "28pt" }} >Hi, I&apos;m Chantelle. I&apos;m a</h1>
            <div className = "flex justify-center gap-[10px]">
            <h1 
              className = "text-3xl text-[#F6A693]"
              style = {{ fontSize: "28pt" }}
              >
                developer.
            </h1>
            <HomePageMoreBtn link = { "/about" } text = { "MORE" } />
            </div>
          </div>
          <p className = "text-neutral-300 text-md pt-8">
          I design and build software solutions to solve real world problems. I have experience with frontend and backend web development, game development, SaaS projects and more.
          </p>
        </section>
        <section className = "flex gap-[30px] mt-[-30px]">
          <ContactLinks ååå/>
        </section>
        <section className = "w-full">
          <div className = "flex gap-[10px] justify-center items-center">
            <h1 className = "text-2xl pt-[10px]"> Projects </h1> 
            <HomePageMoreBtn link = {"/projects"} text = "MORE" />
          </div>
          <section className = "self-center pt-[40px] text-black" >
            <div className = "flex flex-wrap text-center gap-[20px] justify-center" >
              {
              projects.map((project, idx) => 
              idx < 3 && hideImgCard === project.name
              ?
              <div
                className = "h-[200px] w-[250px] overflow-hidden bg-[#262626] text-sm text-[#F2EAE8] relative pt-[40px] p-[30px] rounded-xl"
                key = {project.name}
                onMouseLeave = { () => {setHideImgCard("")} }
              >
              <p className= " text-md " >{project.name.toUpperCase()}</p>
              <p
                className= "pt-[15px]" > {project.descriptions.homepage}
              </p>
              <MainProjectSkill project = {project} />
              <HomePageMoreBtn link = {`/projects/${project.name}`} text = { " DETAILS " } />
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
        </section>
      </div>
      <section className = "w-full md:w-[60%] lg:w-[50%] xl:w-[40%] text-neutral-300 pt-[70px]">
          <ContactForm />
        </section>
    </>
  )
}
