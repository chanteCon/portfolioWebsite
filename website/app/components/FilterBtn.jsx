import Image from "next/image"

export const FilterBtn = ({ setFilterOn }) => {
  return (
    <button 
      className = " px-4 text-neutral-100 rounded-2xl" 
      style = {{ backgroundColor: '#F6A693' }}
      onClick = {setFilterOn}
      >
        <div className = "flex flex-row space-x-2">
          <Image
            className = "object-contain"
            src = {"/images/icons/filter.png"}
            alt = ""
            width = {12}
            height = {12}
          />
          <p className = "text-sm" >Filter</p>
        </div>
      </button>
  )
}