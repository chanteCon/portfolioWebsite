export const FiltersList = ({ filters, onClose }) => {

  const filterClicked = (filter) => {
    localStorage.setItem('projects filter', filter)
    onClose()
  }

  return (
    <div 
      className = "text-xs rounded-xl p-2"
      style = {{ backgroundColor: "#F2EAE8" }}
    >
       <div className = "flex flex-row justify-between">
         <p className = "hover:text-red py-2"> <b>Filters</b></p>
         <button 
          className = "hover:bg-red-300 hover:text-white text-sm h-5 w-5 rounded"
          onClick = {onClose}
         >x</button>
       </div>
       {
        filters.map(filter => 
          <div 
            key = {filter}
            className = "hover:underline hover:cursor-pointer"
            onClick = { () => filterClicked(filter) }
          >
            {filter}
          </div>
        )
       }
    </div>
  )
}