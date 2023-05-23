import { ContactLinks } from "../components/ContactLinks";
import { ProjectsByCategory } from "../components/ProjectsByCategory";
import { SmallTick } from "../components/SmallTick";

export default function About() {

  const languages = [
    {language: "Python", skill: ["","","","",""]},
    {language: "JavaScript", skill: ["","","",""]},
    {language: "C", skill: ["","","",""]},
    {language: "Java", skill: ["","",""]},
    {language: "Solidity", skill: ["","",""]},
    {language: "PostgreSQL", skill: ["",""]}
  ]

  const tools = [
    "Create React App",
    "Git",
    "Jira",
    "NextJs",
    "Swagger",
    "UE4 blueprints"
  ]

  const addSkill = (skill) => {
    return (
    <div className = "flex flex-row gap-[7px]">
     {skill.map(skill =>  
       <img 
          src ="images/pinkDot.png"
          height = "10px"
          width = "10px"
      />)}
    </div>
    )
  }
 return (
  <div className = 'p-[5%] pt-[100px] text-[#F2EAE8] flex'>
    <section className = "flex flex-col items-center justify-center w-[50%] gap-[40px]">
      <h1 className = "text-2xl font-extralight">Who am I?</h1>
      <img
        src = "/images/aboutImg.png"
        width = "250px"
        height = "250px"
        className = "rounded-3xl"
        alt = "Black and white image of Chantelle smiling at the camera"
      />
      <div className = "flex flex-row gap-[30px]">
      <ContactLinks />
      </div>
      <p className = "w-[70%] text-center text-lg pt-[10px]">
      I am  Chantelle, a developer from Sydney Australia. I have a passion for coding and enjoy working on any programming project. I have recently completed my <p className = "text-[#F6A693] inline">Bachelor of Computer Science </p>at the Univeristy of New South Wales with distinction. I am currently open to work. 
      </p>
      <a
        className = "flex gap-[10px] bg-[#F6A693] w-[110px] h-[40px] rounded-3xl items-center px-[15px] hover:opacity-70"
        type="submit" 
        target = "_blank"
        rel="noreferrer noopener"
        href = "download/Resume.pdf"
      > 
        <img 
          src = "/images/icons/downloadIcon.png"
          alt =""
        />
        <p> resume </p>
      </a>
    </section>
    <section className = "w-[50%] flex flex-col justify-center items-center" >
    <p className = "text-lg" >Skills</p>
    <div className = "mt-[30px] flex flex-row flex-wrap gap-[20px] justify-center ">
      <div className ="flex flex-col items-center gap-[10px]">
        <p>Web Dev</p>
        <div className = "w-[350px] h-[300px] bg-[#262626] p-[10%] text-sm flex flex-col items-center">
          <p> I have experience building end-to-end web applications.<p/><br/>
          <p>On the frontend I have worked with <p className = "text-[#F6A693] inline">Create React App, Next js and vanilla JavaScript.</p></p><br/>
          <p>Server side I have worked with <p className = "text-[#F6A693] inline">python flask</p> to create systems with authentication and authorisation.</p><br/>
          </p>
          <ProjectsByCategory filter = { "Web"} />
        </div>
      </div>
      <div className ="flex flex-col items-center gap-[10px] ">
        <p>Game Dev</p>
        <div className = "w-[350px] h-[300px] bg-[#262626] p-[10%] text-sm flex flex-col items-center">
          <p className = "pb-[41px]" ><p>I worked on the game NIGHTCARE in <p className = "text-[#F6A693] inline">Unreal Engine 4.</p> For this project I used blueprints. NIGHTCARE has been released and is available for download 
            <a 
            href = "https://rinade.itch.io/nightcare"
            target = "_blank"
            rel="noreferrer noopener"
            className = "underline hover:opacity-70"
            > here </a>.
          </p><br/> 
          <p>Additionally, I have experience with <p className = "text-[#F6A693] inline">object oriented</p> game design.</p><br/>
          </p>
          <ProjectsByCategory filter = { "Games"} />
        </div>
      </div>
      <div className ="flex flex-col items-center gap-[10px]">
        <p >Languages</p>
        <div className = "w-[350px] h-[300px] bg-[#262626] flex flex-col justify-center items-start gap-[10px] p-[10%]">
          {
            languages.map(language => 
            <div className = "flex justify-center items-center gap-[10px]" >
              <p className = "w-[100px]">{language.language}</p>
              <div >
                {addSkill(language.skill)}
              </div>
            </div>)
          }
        </div>
      </div>
      <div className ="flex flex-col items-center gap-[10px]">
        <p>Tools</p>
        <div className = "w-[350px] h-[300px] bg-[#262626] flex flex-col justify-center items-start gap-[10px] p-[10%]">
          {
            tools.map(tool => 
              <div className = "w-full flex justify-between">
              <div className = "w-[130px]" >{tool}</div>
              <SmallTick />
              </div>
            )
          }
        </div>
      </div>
    </div>
    </section>
  </div>
 )
}