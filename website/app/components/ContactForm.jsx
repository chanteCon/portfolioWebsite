"use client"

import emailjs from "@emailjs/browser";
import React from "react";

export const ContactForm = ({ title }) => {
  const [sent, setSent] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const [invalidName, setInvalidName] = React.useState(false)
  const [invalidEmail, setInvalidEmail] = React.useState(false)
  const [invalidMsg, setInvalidMsg] = React.useState(false)
  const [invalidSend, setInvalidSend] = React.useState(false)
  const form = React.useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputs = form.current.querySelectorAll('input')
    if (inputs[0].value.length === 0 || 
        inputs[1].value.length === 0 ||
        inputs[2].value.length === 0) {
          setInvalidSend(true)
          return
    }
    setSending(true)
    setInvalidSend(false)
    emailjs.sendForm("service_3synuej", "template_tuxvbwe", form.current, "v_cQnqwTKfpAgXAPh")
      .then((result) => {
          setSent(true)
          console.log(result.text);
      }, (error) => {
          alert(error.text);
      }
      );
  };

  const checkInput = (e) => {
    console.log(e.target.value)
    console.log(e.target.placeholder)
    switch (e.target.placeholder) {
      case 'name':
        e.target.value.length === 0 ? setInvalidName(true) : setInvalidName(false)
        break;
      case 'email':
        e.target.value.length === 0 ? setInvalidEmail(true) : setInvalidEmail(false)
        break;
      case 'Your message':
        e.target.value.length === 0 ? setInvalidMsg(true) : setInvalidMsg(false)
        break;
    }
  }

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
          onFocus = {() => setInvalidSend(false)}
          onBlur = {(e) => checkInput(e)}
          onKeyDown= {() => setInvalidName(false)}
        />
        {invalidName && <div className = "text-[#F6A693]">Please enter your name</div>}
        <input 
        type="text"
        name="user_email"
        className = "placeholder-[#C6C0BE] bg-[#262626] border-[1px] border-[#F6A693] w-full rounded-lg p-[5px] px-[25px]"
        placeholder= "email"
        onFocus = {() => setInvalidSend(false)}
        onBlur = {(e) => checkInput(e)}
        onKeyDown= {() => setInvalidEmail(false)}
      />
      {invalidEmail && <div className = "text-[#F6A693]">Please enter your email</div>}
      <textarea 
        type="text"
        name="message"
        className = "placeholder-[#C6C0BE] bg-[#262626] border-[1px] border-[#F6A693] w-full rounded-lg p-[25px] h-[150px] md:h-[200px] resize-none"
        placeholder= "Your message"
        onFocus = {() => setInvalidSend(false)}
        onBlur = {(e) => checkInput(e)}
        onKeyDown= {() => setInvalidMsg(false)}
      />
      {invalidMsg && <div className = "text-[#F6A693]">Please enter your message</div>}
      {invalidSend && <div className = "text-[#F6A693]">You have not filled in your information</div>}
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