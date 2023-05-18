"use client"
import Image from "next/image"
import data from "data/projects.json"
import React from "react"
import { FilterBtn } from "../components/FilterBtn"
import { FiltersList } from "../components/FiltersList"

export default function Projects() {
  const filters = ["All", "Web", "Blockchain", "Games", "Released/Deployed", "Source code", "Blueprints", "Java", "JavaScript", "Python", "Solidity"]
  const [showFilters, setShowFilters] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('All')
  const projects = data.projects

  console.log(projects)

  const filterBy = (filter) => {

  }

  React.useEffect(() => {
    localStorage.getItem !== null ? localStorage.setItem('projects filter', 'All') : setActiveFilter(window.localStorage.getItem('projects filter'))
  }, []);

  return (
    <div className = "w-full flex justify-center pb-20">
      <div className = 'pt-20 h-screen lg:w-[60%] 2xl:w-[50%] flex flex-col'>
        <div className = "w-[60%] flex justify-end">
          <h1 className= "text-neutral-300 text-3xl mt-[25px] font-extralight"> Recent Projects</h1>
        </div>
        <div
          className = "pt-20 flex flex-wrap justify-center text-3xl text-center gap-7 pb-[30px] justify-self-center"
        >
            {
              projects.map(project =>
                <button 
                  className = "h-[250px] w-[260px] transition transform hover:-translate-y-1 overflow-hidden"
                  key = {project.name}
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
                    <Image
                      src = {"/images/icons/tickIcon.png"}
                      alt = ""
                      width = {18}
                      height = {18}
                      className= "object-contain"
                    >
                    </Image>
                  </div>
                  <div>hi</div>
              </button>
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