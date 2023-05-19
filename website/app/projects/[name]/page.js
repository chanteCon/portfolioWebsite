import React from 'react';
import data from "data/projects.json"
import { BlurImage } from '@/app/components/BlurImage';
import { SmallTick } from '@/app/components/SmallTick';

export default function ProjectPage ({ params })  {
  const name = params.name.replace("%20"," ")
  const project = data.projects.find(proj => proj.name === name)

  return (
    <div className = "flex flex-col w-[80%] xl:w-[50%] 2xl:w-[40%] pt-[10vh] justify-center text-center gap-[50px]">
      < div 
          className = "w-full h-[230px] overflow-hidden relative rounded-2xl"
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
    <h1 className = "text-[#F2EAE8] text-lg" > About This Project </h1>
    <div className = "w-full flex justify-center bg-[#262626] text-[#F2EAE8] p-[20px] text-left rounded mt-[-35px]" >
      {project.descriptions.full}
    </div>
    <section className = "self-center flex flex-wrap justify-start lg:gap-[30px] gap-[20px] ">
      <div className = "w-[200px] h-[200px] flex flex-col justify-evenly bg-[#262626] text-[#F2EAE8] p-[40px] text-left rounded" >
        {project.skills.map(skill => 
        <div className = "flex justify-between">
          <p>{skill}</p>
          <SmallTick />
        </div>
        )}
      </div>
      <div className = "w-[200px] h-[200px] flex flex-col justify-evenly bg-[#262626] text-[#F2EAE8] p-[40px] text-left rounded" >
        {project.skills.map(skill => 
        <div className = "flex justify-between">
          <p>{skill}</p>
          <SmallTick />
        </div>
        )}
      </div>
      <div className = "w-[200px] h-[200px] flex flex-col justify-evenly bg-[#262626] text-[#F2EAE8] p-[40px] text-left rounded" >
        {project.skills.map(skill => 
        <div className = "flex justify-between">
          <p>{skill}</p>
          <SmallTick />
        </div>
        )}
      </div>
    </section>
  </div>
  );
}

