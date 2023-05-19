"use client"
import Image from "next/image"
import data from "data/projects.json"
import React from "react"
import { FilterBtn } from "../components/FilterBtn"
import { FiltersList } from "../components/FiltersList"
import { SmallTick } from "../components/smallTick"

export default function Projects() {
  const filters = ["All", "Web", "Blockchain", "Games", "Released/Deployed", "Source code", "Blueprints", "Java", "JavaScript", "Python", "Solidity"]
  const [showFilters, setShowFilters] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('All')
  const [hideImgCard, setHideImgCard] = React.useState('')
  const projects = data.projects

  React.useEffect(() => {
    localStorage.getItem === null ? localStorage.setItem('projects filter', 'All') : setActiveFilter(window.localStorage.getItem('projects filter'))
  }, [showFilters]);

console.log(activeFilter)

  return (
    <div className = "w-full flex justify-center pb-20">
      <div className = 'pt-20 h-screen lg:w-[60%] 2xl:w-[50%] flex flex-col'>
        <div className = "w-[60%] flex justify-end">
          <h1 className= "text-neutral-300 text-3xl mt-[25px] font-extralight"> {`Recent Projects - ${activeFilter}`}</h1>
        </div>
        <div
          className = "pt-20 flex flex-wrap justify-center text-3xl text-center gap-7 pb-[30px] justify-self-center"
        >
            { 
              projects.filter(project => project.filters.includes(activeFilter)).map(project =>
                hideImgCard === project.name 
                ? 
                <div 
                  className = "h-[250px] w-[260px] overflow-hidden bg-[#262626] text-sm text-[#F2EAE8] relative pt-[40px]"
                  key = {project.name}
                  onMouseLeave = { () => {setHideImgCard('')} }
                >
                <p className= " text-md " >{project.name.toUpperCase()}</p>
                  <p
                    className= "p-[15px]" > {project.descriptions.projectsPage}
                  </p>
                  <div className = "flex justify-center gap-3">
                  {
                      project.links.map(link =>
                      link.type !== "video" && <button
                        className = "h-[30px] w-[80px] rounded-2xl bg-[#F2EAE8] text-xs text-black flex px-[10px]"
                      >
                      <a
                        className = "self-center"
                        style = {{ lineHeight: '0.9' }}
                        href = {link.link}
                        target = "_blank"
                        rel="noreferrer noopener"
                      >{link.name}</a>
                      <img
                        src = '/images/icons/externalLinkBlack.png'
                        className = "w-[15px] h-[15px] self-center"
                      />
                    </button>)
                  }
                    <button
                          className = "h-[30px] w-[80px] rounded-2xl bg-[#F2EAE8] text-xs text-black"
                    > MORE +
                    </button>
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
                  className = "h-[250px] w-[260px] overflow-hidden relative"
                  key = {project.name}
                  onMouseOver = { () => {setHideImgCard(project.name)} }
                >
                  <div
                    className = "h-[250px] w-[260px] xl:h-[300px] xl:w-[310px] bg-cover bg-center"
                    style = {{
                      backgroundImage: `url(${project.images.mainImage})`,
                      backgroundColor: 'rgba(242, 234, 232, 0.4)',
                      backgroundBlendMode: 'screen',
                      filter: 'blur(1.5px)',
                      transform: 'scale(1.01)'
                    }}
                    >
                  </div>
                  <p
                    className = "relative bottom-[140px] xl:bottom-[190px]"
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
      </div >
      <div className = "absolute sm:right-[26%] top-[110px] right-[10%] self-center">
            {
              showFilters
                ? <>
                  <div
                    className = "w-screen h-screen fixed top-0 left-0 fixed z-500"
                    onClick = { () => setShowFilters(false) }
                  ></div>
                  <div className = "absolute z-600 sm:right-[26%] right-[10%]">
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