"use client"

import emailjs from "@emailjs/browser";
import React from "react";

export const ContactForm = ({ title }) => {
  const [sent, setSent] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const form = React.useRef();
  const sendEmail = (e) => {
    setSending(true)
    e.preventDefault();
    e.stopPropagation();

    emailjs.sendForm("service_3synuej", "template_tuxvbwe", form.current, "v_cQnqwTKfpAgXAPh")
      .then((result) => {
          setSent(true)
          console.log(result.text);
      }, (error) => {
          alert(error.text);
      }
      );
  };

  return (
    <div data-testid = "contactForm"
         className = "w-full flex flex-col items-center"
    >
      <h1 className = "pb-[10px] md:pb-[20px] text-lg" >{
      title ? title : "Say hello!"
      }</h1>
      <form ref={form} className = "w-[70%] flex flex-col gap-[10px]" >
        <input 
          type="text"
          name="user_name"
          aria-label = "user_name"
          className = "placeholder-[#C6C0BE] bg-[#262626] border-[1px] border-[#F6A693] w-full rounded-lg p-[5px] px-[25px]"
          placeholder= "name"
        />
        <input 
        type="text"
        name="user_email"
        className = "placeholder-[#C6C0BE] bg-[#262626] border-[1px] border-[#F6A693] w-full rounded-lg p-[5px] px-[25px]"
        placeholder= "email"
      />
      <textarea 
        type="text"
        name="message"
        className = "placeholder-[#C6C0BE] bg-[#262626] border-[1px] border-[#F6A693] w-full rounded-lg p-[25px] h-[150px] md:h-[200px] resize-none"
        placeholder= "Your message"
      />
      <button 
        className = "lg:mt-[10px] w-[140px] h-[30px] bg-[#F6A693] rounded-xl hover:opacity-70 text-neutral-100"
        onClick = {sendEmail}
      > {
          sent
          ? "Message Sent!"
          : sending 
            ? "Sending..."
            : "Send Message"
        }
      </button>
      </form>
    </div>
  )
}