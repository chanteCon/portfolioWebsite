import { SmallTick } from "./SmallTick"

export const MainProjectSkill = ({ project }) => {
  return (
    <div
      data-testid = "mainSkill"
      className = "absolute top-[7px] right-[7px] w-[100px] h-[25px] bg-[#373737] rounded-3xl flex justify-between px-4"
    >
      <p
        className = "text-white text-xs self-center"
      >
        {project.skills[0].toUpperCase()}
      </p>
      <SmallTick />
    </div>
  )
}