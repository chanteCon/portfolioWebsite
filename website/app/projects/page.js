"use client"

import Image from "next/image"
import React from "react"
import { FilterBtn } from "../components/FilterBtn"
import { FiltersList } from "../components/FiltersList"

export default function Projects() {
  const filters = ["All", "Web", "Blockchain", "Games", "Released/Deployed", "Source code", "Language"]
  const languages = ['Blueprints, Java, JavaScript, Python, Solidity']
  const [showFilters, setShowFilters] = React.useState(false)
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filterBy = (filter) => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style = {{ backgroundColor: '#191919' }}>
      <div className = 'pt-40 w-2/5 flex flex-row justify-between'>
        <h1 className= "text-neutral-400 text-2xl"> Recent Projects</h1>
        {
          showFilters
            ? <FiltersList
              filters = { filters }
              selectFilter = { () => setActiveFilter(localStorage.getItem('projects filter')) }
              onClose = { () => setShowFilters(false) }
              />
            : <FilterBtn setFilterOn = {() => setShowFilters(true)}/>
        }
      </div>
    </main>
  )
 }