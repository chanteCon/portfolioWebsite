"use client"
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
      <div className = 'pt-20 h-screen lg:w-[60%] flex flex-col'>
        <div className = "w-[60%] flex justify-end">
          <h1 className= "text-neutral-300 text-3xl mt-[25px] font-extralight"> Recent Projects</h1>
        </div>
        <div
          className = "pt-20 flex flex-wrap justify-center text-3xl text-center gap-7 pb-[30px]"
        >
            {
              projects.map(project =>
                <button 
                  className = "h-[250px] w-[260px] transition transform hover:-translate-y-1 overflow-hidden"
                  key = {project.name}
                >
                  <div
                    className = "h-[250px] w-[260px] bg-cover bg-center"
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
                    style = {{ position: "relative", bottom: "140px" }}
                  >
                    {project.name.toUpperCase()}
                  </p>
                  <div>hi</div>
              </button>
              )
            }
        </div>
      </div >
      <div className = "absolute sm:right-[26%] top-[110px] right-[10%]">
            {
              showFilters
                ? <>
                  <div
                    className = "w-screen h-screen fixed top-0 left-0 fixed z-500"
                    onClick = { () => setShowFilters(false) }
                  ></div>
                  <div className = "absolute z-600">
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