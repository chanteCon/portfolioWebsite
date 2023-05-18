import Image from "next/image"

export const SmallTick = () => {
  return (
    <Image
      src = {"/images/icons/tickIcon.png"}
      alt = ""
      width = {18}
      height = {18}
      className= "object-contain"
    >
    </Image>
  )
}