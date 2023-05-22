"use client"

import data from "data/projects.json"
import React from "react"
import { FilterBtn } from "../components/FilterBtn"
import { FiltersList } from "../components/FiltersList"
import { SmallTick } from "../components/smallTick"
import { RecentProjTitle } from "../components/RecentProjTitle"
import { BlurImage } from "../components/BlurImage"
import Link from "next/link"
import { smallLightBtn } from "../TailwindStyles"
import { LinksBtns } from "../components/LinkBtns"

export default function Projects() {
  const filters = ["All", "Web", "Blockchain", "Games", "Released/Deployed", "Source code", "Blueprints", "JavaScript", "Python", "Solidity"]
  const [showFilters, setShowFilters] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('All')
  const [hideImgCard, setHideImgCard] = React.useState('')
  const projects = data.projects
  const displayProjects = projects.filter(project => project.filters.includes(activeFilter))

  React.useEffect(() => {
    localStorage.getItem === null ? localStorage.setItem('projects filter', 'All') : setActiveFilter(window.localStorage.getItem('projects filter'))
  }, [showFilters]);


  return (
    <div className = "w-full flex flex-col align-center justify-center pt-[80px]">
        <RecentProjTitle activeFilter = {activeFilter}/>
        {/* Project cards container */}
        <section className = "self-center pt-[60px] lg:w-[95%] xl:w-[62%]" >
            <div className = "flex flex-wrap text-center gap-[20px] justify-center" >
              {
                displayProjects.map(project =>
                  hideImgCard === project.name
                  ?
                  <div
                    className = "h-[250px] w-[300px] md:h-[350px] md:w-[400px] overflow-hidden bg-[#262626] text-sm md:text-lg text-[#F2EAE8] relative pt-[40px] p-[30px]"
                    key = {project.name}
                    onMouseLeave = { () => {setHideImgCard('')} }
                  >
                  <p className= " text-md " >{project.name.toUpperCase()}</p>
                    <p
                      className= "md:p-[30px] pt-[15px]" > {project.descriptions.projectsPage}
                    </p>
                    <div className = "flex flex-row flex-wrap justify-center md:gap-7 gap-3 pt-[15px] md:pt-0">
                     <LinksBtns project = {project} />
                      <Link
                            className = {smallLightBtn}
                            style = {{ lineHeight: '30px' }}
                            href = {`/projects/${project.name}`}
              
                      > MORE +
                      </Link>
                  </div>
                     <div
                      className = "absolute top-[7px] right-[7px] w-[100px] h-[25px] bg-[#373737] rounded-3xl flex justify-between px-4"
                    >
                      <p
                        className = "text-white text-xs self-center"
                      >
                        {project.skills[0].toUpperCase()}
                      </p>
                      <SmallTick />
                    </div>
                  </div>
                  :
                  <div
                    className = "h-[250px] w-[300px] md:h-[350px] md:w-[400px] overflow-hidden relative"
                    key = {project.name}
                    onMouseOver = { () => {setHideImgCard(project.name)} }
                  >
                    <BlurImage
                      className = "h-[250px] w-[300px] md:h-[350px] md:w-[400px] bg-cover bg-center"
                      style = {{
                        backgroundImage: `url(${project.images.mainImage})`,
                      }}
                      >
                    </BlurImage>
                    <p
                      className = "md:text-3xl relative bottom-[140px] md:bottom-[190px]"
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
                )
              }
            </div>
        </section>

      {/* Buttons for filter and filter list */}
      <div className = "absolute lg:right-[30%] top-[110px] right-[8%] self-center">
            {
              showFilters
                ? <>
                  <div
                    className = "w-screen h-screen fixed top-0 left-0 fixed z-500"
                    onClick = { () => setShowFilters(false) }
                  ></div>
                  <div className = "absolute z-600 lg:right-[30%] right-[8%] ">
                  <FiltersList
                    filters = { filters }
                    onClose = { () => setShowFilters(false) }
                  />
                  </div>
                  </>
                : <FilterBtn
                  setFilterOn = {() => setShowFilters(true)}/>
            }
          </div>
    </div>
  )
 }