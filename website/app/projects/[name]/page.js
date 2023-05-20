"use-client"

import React from 'react';
import data from "data/projects.json"
import { BlurImage } from '@/app/components/BlurImage';
import { SmallTick } from '@/app/components/SmallTick';
import { VideoEmbeds } from '@/app/VideoEmbeds';

export default function ProjectPage ({ params })  {
  const name = params.name.replace("%20"," ")
  const project = data.projects.find(proj => proj.name === name)
  const video = project.links.find(link => (link.type === "video"))
  const url =video ? VideoEmbeds(video.link) : ""

  const boxCardStyle = "w-[200px] h-[200px] flex flex-col justify-evenly bg-[#262626] text-[#F2EAE8] p-[40px] text-left rounded"

  return (
    <div className = "flex flex-col w-[80%] xl:w-[50%] 2xl:w-[40%] pt-[10vh] justify-center text-center gap-[50px] text-[#F2EAE8]">
      < div 
          className = "w-full h-[230px] overflow-hidden relative rounded-2xl text-black"
          key = {project.name}
        >
          <BlurImage
            className = "w-full h-[230px] bg-cover bg-center rounded-2xl"
            style = {{
              backgroundImage: `url(${project.images.mainImage})`,
            }}
            >
          </BlurImage>
          <p
            className = "relative bottom-[140px] text-3xl"
          >
            {project.name.toUpperCase()}
          </p>
      </div>
      {
        video && 
        <div>
          <p>{video.name}</p>
          <iframe 
            src = {url} 
            width = "300px"
            height = "300px"
          />
        </div>
      }
      <section className = "flex flex-wrap justify-center xl:gap-[10px] gap-[20px]">
      <div>
        <p >Skills</p>
        <div className = { boxCardStyle }>
          {project.skills.map(skill => 
          <div className = "flex justify-between">
            <p>{skill}</p>
            <SmallTick />
          </div>
          )}
        </div>
      </div>
      <div>
      <p > 
      {
        project.roles.length > 1 ? 'Roles' : 'Role'
      }
      </p>
        <div className = { boxCardStyle } >
          {project.roles.map(role =>
          <div className = "flex justify-between text-left p-[0px]">
            <li>{role}</li>
          </div>
          )}
        </div>
      </div>
      <div>
        <p >Technologies</p>
        <div className = { boxCardStyle } >
          {project.technologies.map(tech =>
          <div className = "flex justify-between">
            <p>{tech}</p>
          </div>
          )}
        </div>
      </div>
    </section>
    <h1 className = "text-[#F2EAE8] text-lg" > {`What is ${project.name}?`} </h1>
    <div className = "w-full flex justify-center bg-[#262626] p-[40px] rounded mt-[-35px] text-left" >
      {project.descriptions.full}
    </div>
    <h1 className = "text-[#F2EAE8] text-lg" > What did I do? </h1>
    <div className = "w-full flex justify-center bg-[#262626] p-[40px] rounded mt-[-35px] text-left" >
      {project.contributions}
    </div>
  </div>
  );
}

