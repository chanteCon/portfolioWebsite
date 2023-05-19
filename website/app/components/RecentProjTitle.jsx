export const RecentProjTitle = ({activeFilter}) => {
  return (
    <section className = "w-[62%] lg:w-[50%] flex justify-end">
      <div className = "flex flex-col">
        <h1 className= "text-neutral-300 text-2xl sm:text-3xl mt-[25px] font-extralight"> Recent Projects </h1>
        {
          activeFilter !== "All" && 
          <h1 
            className= "text-neutral-300 text-xl font-extralight">
              {`${activeFilter} projects`}
          </h1> }
      </div>
    </section>
  )
}