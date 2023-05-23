"use client"

import { ContactLinks } from "../components/ContactLinks";

export default function Contact() {
  const copyUserName = () => {
    navigator.clipboard.writeText("ChanteCon#4811")
    alert("username copied")
  }

  return (
    <main className = "pt-[120px] flex flex-col justify-center text-neutral-300 text-center w-full">
      <section className = "flex flex-col gap-[10px] pb-[70px] font-extralight">
        <h1 className = "text-3xl"> GET IN TOUCH </h1>
        <p className = "text-lg" >I would love to hear from you</p>
      </section>
      <section className = "justify-center w-full flex flex-wrap">
        <div className = "w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px] h-[350px] md:h-[450px] lg:h-[600px] bg-[#373737]">
        </div>
        <div className = "w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px] h-[350px] md:h-[450px] lg:h-[600px] bg-[#262626] text-left p-[30px] md:p-[100px] flex flex-col gap-[50px]">
          <div className = "self-start flex flex-col items-center">
            <p>Chantelle Conlon Scoullar</p>
            <img 
              className = "ml-[-10px] pt-[5px]"
              src = "/images/pinkLine.svg"
              width = "150px"
              height = "4px"
            />
          </div>
          <div className = "flex gap-[30px] mt-[-30px] ml-[10px]">
            <ContactLinks onClick = {() => copyUserName()}/>
          </div>
          <a 
            className = "flex gap-[15px]" 
            href="mailto:chantelle.cs@outlook.com"
          >
            <img
              src = "/images/icons/mail.png"
              width = "25px"
              height = "20px"
            />
            <p>chantelle.cs@outlook.com</p>
            </a>
          <div className = "flex gap-[15px]">
            <img
              src = "/images/icons/phoneIcon.png"
              width = "25px"
              height = "20px"
            />
            <p>0413122769</p>
          </div>
        </div>
        <div>

        </div>
      </section>
    </main>
  )
}