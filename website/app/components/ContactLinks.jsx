import { HomePageLinks } from "./HomePageLinks"
export const ContactLinks = ({onClick}) => {
  return (
   <div data-testid = "contactLinks" className ="flex gap-[30px]">
      <HomePageLinks 
        link = "https://github.com/chanteCon" 
        img = "images/icons/GitIcon.png"
     />
      <HomePageLinks 
        link = "https://www.linkedin.com/in/chantelle-conlon-scoullar-2456ab259/" 
        img = "images/icons/LinkedInIcon.png"
        />
      <button
        onClick = {onClick} 
        className = "hover:opacity-80"
      >
        <img 
          src = "images/icons/DiscordIcon.png"
          alt =""
          height = "20px"
          width = "20px"
        />
      </button>
    </div>
  )
}