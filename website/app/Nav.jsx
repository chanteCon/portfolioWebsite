
export const Nav = () => {
  return (
    <div className= "w-full text-slate-200 text-xs pt-5 fixed flex justify-between"> 
      <section>
        Chantelle Conlon Scoullar
      </section>
      <section
        className= "flex justify-end space-x-5 pr-10"
        style = {{backgroundColor: '#191919'}}>
          <div>Home</div>
          <div>Recent Projects</div>
          <div>About Me</div>
          <div>Contact</div>
        </section>
    </div>
  )
}