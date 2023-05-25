import Image from "next/image"

export const FilterBtn = ({ setFilterOn }) => {
  return (
    <button 
      aria-label = 'filter-button'
      className = " px-4 text-neutral-100 rounded-2xl w-[50px] md:w-20 h-7" 
      style = {{ backgroundColor: '#F6A693' }}
      onClick = {setFilterOn}
      >
        <div className = "flex flex-row md:space-x-2">
          <Image
            className = "object-contain ml-[-8px] md:ml-0"
            src = {"/images/icons/filter.png"}
            alt = ""
            width = {12}
            height = {12}
          />
          <p className = "text-xs md:text-sm" >Filter</p>
        </div>
      </button>
  )
}