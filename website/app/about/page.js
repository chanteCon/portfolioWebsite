import { ContactForm } from "../components/ContactForm";
import { ContactLinks } from "../components/ContactLinks";
import { EducationInfo } from "../components/EducationInfo";
import { ProjectsByCategory } from "../components/ProjectsByCategory";
import { SmallTick } from "../components/SmallTick";

export const metadata = {
  title: "About",
  description: "Chantelle Conlon Scoullar, a developer from Sydney Australia. I have a passion for coding and enjoy working on any programming project. I have recently completed my Bachelor of Computer Science at the Univeristy of New South Wales with distinction. I am currently open to work."
}

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

  const education = [
    {year: 2015, details: "HSC \n ATAR: 88.25"},
    {year: 2020, details: "Commenced UNSW bachelor of Computer Science"},
    {year: 2023, details: "Completed UNSW bachelor of Computer Science with distinction"}
  ]

  const addSkill = (skill) => {
    return (
    <div className = "flex flex-row gap-[7px]">
     {skill.map(skill =>  
       <img 
          key = { crypto.randomUUID() }
          src ="images/pinkDot.png"
          height = "10px"
          width = "10px"
          alt = ""
      />)}
    </div>
    )
  }
 return (
  <div className = 'relative pt-[100px] text-[#F2EAE8] flex mxl:flex-row flex-col justify-center gap-[40px] '>
    <section className = "mxl:fixed 2xl:left-[150px] left-[80px] flex flex-col items-center justify-center sm:w-[640px] md:w-[700px] gap-[40px] overflow-auto top-0 right-0 bottom-0 sm:pt-[50px]">
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
      <div className = "w-[70%] text-center text-lg pt-[10px]">
      I am  Chantelle, a developer from Sydney Australia. I have a passion for coding and enjoy working on any programming project. I have recently completed my <p className = "text-[#F6A693] inline">Bachelor of Computer Science </p>at the Univeristy of New South Wales with distinction. I am currently open to work. 
      </div>
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
    <div className = "mxl:relative flex flex-col mxl:mr-[100px] 2xl:mr-0 left-[350px] gap-y-[100px]">
      <section className = "sm:w-[640px] md:w-[700px] flex flex-col justify-center items-center" >
        <p className = "text-lg hidden sm:block" >Skills</p>
        <div className = "mt-[10px] flex flex-row flex-wrap gap-[15px] justify-center ">
          <div className ="flex flex-col items-center gap-[10px]">
            <p>Web Dev</p>
            <div className = "w-[280px] h-[280px] bg-[#262626] p-[5%] text-xs sm:text-sm flex flex-col items-center justify-center">
              <div className = "pb-[-30px]">
                <div> I have experience building end-to-end web applications.<br/>
                <div>On the frontend I have worked with <p className = "text-[#F6A693] inline">Create React App, Next js and vanilla JavaScript.</p></div><br/>
                <div>Server side I have worked with <p className = "text-[#F6A693] inline">python flask</p> to create systems with authentication and authorisation.</div><br/>
                </div>
              </div>
              <ProjectsByCategory filter = { "Web"} />
            </div>
          </div>
          <div className ="flex flex-col items-center gap-[10px] ">
            <p>Game Dev</p>
            <div className = "w-[280px] h-[280px] bg-[#262626] p-[5%] text-sm flex flex-col items-center justify-center">
              <div className = "pb-[38px]" ><div>I worked on the game NIGHTCARE in <p className = "text-[#F6A693] inline">Unreal Engine 4.</p> For this project I used blueprints. NIGHTCARE has been released and is available for download
                <a
                href = "https://rinade.itch.io/nightcare"
                target = "_blank"
                rel="noreferrer noopener"
                className = "underline hover:opacity-70"
                > here </a>.
              </div><br/>
              <div>Additionally, I have experience with <p className = "text-[#F6A693] inline">object oriented</p> game design.</div><br/>
              </div>
              <ProjectsByCategory filter = { "Games"} />
            </div>
          </div>
          <div className ="flex flex-col items-center gap-[10px]">
            <p >Languages</p>
            <div className = "w-[280px] h-[280px] bg-[#262626] flex flex-col justify-center items-start gap-[10px] p-[10%]">
              {
                languages.map(language =>
                <div 
                  key = { language.language }
                  className = "flex justify-center items-center gap-[10px]" >
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
            <div className = "w-[280px] h-[280px] bg-[#262626] flex flex-col justify-center items-start gap-[10px] p-[10%]">
              {
                tools.map(tool =>
                  <div
                    key = { tool } 
                    className = "w-full flex justify-between">
                  <div className = "w-[130px]" >{tool}</div>
                  <SmallTick />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
      <section className = "sm:w-[640px] flex flex-col justify-center items-center ">
        <p className = "text-lg" >Education</p>
        <div>
        <img
          className = "pt-[60px]"
          src = "images/timeline.svg"
          alt= "A timeline of education"
          width = "100px"
          height ="200px"
        />
        </div>
        <div className = "relative top-[-310px] sm:right-[145px] right-[90px]">
          <EducationInfo education = { education[0] } />
        </div>
        <div className = "relative sm:top-[-280px] top-[-360px] sm:left-[145px] left-[90px]">
          <EducationInfo education = { education[1] } />
        </div>
        <div className = "relative sm:top-[-260px] top-[-400px] sm:right-[145px] right-[90px]">
          <EducationInfo education = { education[2] } />
        </div>
        <div className = "w-full sm:w-[80%] sm:mt-[-200px] mt-[-320px]">
          <ContactForm />
        </div>
      </section>
    </div>
  </div>
 )
}