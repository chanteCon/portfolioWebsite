"use client"

import Image from "next/image"
import React from "react"
import { FilterBtn } from "../components/FilterBtn"
import { FiltersList } from "../components/FiltersList"

export default function Projects() {
  const filters = ["All", "Web", "Blockchain", "Games", "Released/Deployed", "Source code", "Blueprints", "Java", "JavaScript", "Python", "Solidity"]
  const [showFilters, setShowFilters] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filterBy = (filter) => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-light" style = {{ backgroundColor: '#191919' }}
    >
      <div className = 'pt-40 w-2/5 flex flex-row justify-between'>
        <h1 className= "text-neutral-400 text-2xl"> Recent Projects</h1>
        {
          showFilters
            ? <>
              <div 
                className = "w-screen h-screen fixed top-10 left-0 z-1000"
                onClick = { () => setShowFilters(false) }
              ></div>
              <div className = "relative z-2000">
              <FiltersList
                filters = { filters }
                onClose = { () => setShowFilters(false) }
              />
              </div>
              </>
            : <FilterBtn setFilterOn = {() => setShowFilters(true)}/>
        }
      </div>
    </main>
  )
 }