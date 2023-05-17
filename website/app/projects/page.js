"use client"

import React from "react"
import { FilterBtn } from "../components/FilterBtn"
import { FiltersList } from "../components/FiltersList"

export default function Projects() {
  const filters = ["All", "Web", "Blockchain", "Games", "Released/Deployed", "Source code", "Blueprints", "Java", "JavaScript", "Python", "Solidity"]
  const [showFilters, setShowFilters] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filterBy = (filter) => {

  }

  React.useEffect(() => {
    localStorage.getItem !== null ? localStorage.setItem('projects filter', 'All') : setActiveFilter(window.localStorage.getItem('projects filter'))
  }, []);

  return (
      <div className = 'pt-20 align-center'>
        <h1 className= "text-neutral-300 text-3xl mb-2"> Recent Projects</h1>
        <div className = "absolute sm:top-20 sm:right-20">
          {
            showFilters
              ? <>
                <div 
                  className = "w-screen h-screen fixed top-0 left-0 z-1000"
                  onClick = { () => setShowFilters(false) }
                ></div>
                <div className = "relative z-2000">
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