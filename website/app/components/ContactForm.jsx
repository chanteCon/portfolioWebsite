import emailjs from '@emailjs/browser';
import React from 'react';

export const ContactForm = ({ title }) => {
  const [sent, setSent] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const form = React.useRef();
  const sendEmail = (e) => {
    setSending(true)
    e.preventDefault();
    e.stopPropagation();

    emailjs.sendForm('service_3synuej', 'template_tuxvbwe', form.current, 'v_cQnqwTKfpAgXAPh')
      .then((result) => {
          setSent(true)
          console.log(result.text);
      }, (error) => {
          alert(error.text);
      }
      );
  };

  return (
    <div className = "w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px] h-[350px] md:h-[450px] lg:h-[600px] bg-[#373737] flex flex-col pt-[20px] lg:pt-[70px] md:pt-[50px] items-center">
      <p className = "pb-[10px] md:pb-[20px] lg:mr-[290px] text-lg" >{title}</p>
      <form ref={form} className = "md:w-[70%] flex flex-col gap-[10px]" >
        <input 
          type="text"
          name="user_name"
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
        className = "lg:mt-[10px] w-[140px] h-[30px] bg-[#F6A693] rounded-xl hover:opacity-70"
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