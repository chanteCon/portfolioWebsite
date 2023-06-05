import { ContactForm } from "../components/ContactForm";
import { ContactLinks } from "../components/ContactLinks";

export const metadata = {
  title: "Contact",
  description: "Phone: 0413122769, Email: chantelle.cs@outlook.com"
}


export default function Contact() {

  return (
    <main className = "pt-[120px] flex flex-col justify-center text-[#F2EAE8] text-center w-full">
      <section className = "flex flex-col gap-[10px] pb-[70px] font-extralight">
        <h1 className = "text-3xl"> GET IN TOUCH </h1>
        <p className = "text-lg" >I would love to hear from you</p>
      </section>
      <section className = "justify-center w-full flex flex-wrap-reverse">
        <div className = "justify-center w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[550px] h-[500px] md:h-[600px] bg-[#373737] flex flex-col pt-[20px] lg:pt-[70px] md:pt-[50px] items-center">
          <ContactForm />
        </div>
        <div className = "justify-center w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[550px] h-[500px] md:h-[600px] bg-[#262626] text-left p-[30px] sm:p-[100px] flex flex-col gap-[50px]">
          <div className = "self-start flex flex-col items-center">
            <p className = "lg:text-lg" >Chantelle Conlon Scoullar</p>
            <img 
              className = "ml-[-10px] pt-[5px]"
              src = "/images/pinkLine.svg"
              width = "150px"
              height = "4px"
              alt = ""
            />
          </div>
          <div className = "flex gap-[30px] mt-[-30px] ml-[10px]">
            <ContactLinks />
          </div>
          <a 
            className = "flex gap-[15px] hover:opacity-70 w-[200px]" 
            href="mailto:chantelle.cs@outlook.com"
          >
            <img
              src = "/images/icons/mail.png"
              width = "25px"
              height = "20px"
              alt = ""
            />
            <p>chantelle.cs@outlook.com</p>
            </a>
          <a className = "flex gap-[15px] hover:opacity-70 w-[100px]"
              href = "tel:+61413122769"
          >
            <img
              alt = ""
              src = "/images/icons/phoneIcon.png"
              width = "25px"
              height = "20px"
            />
            <p>0413122769</p>
          </a>
        </div>
      </section>
    </main>
  )
}