import Link from "next/link"
import { extraSmallDarkBtn } from "../TailwindStyles"

export const HomePageMoreBtn = ({ link, text }) => {
  return (
    <div 
      className = "pt-[10px]"
      data-testid = "homePageMore"
    >
      <Link
        href = { link }
        data-testid = "infoLink"
      >
        <button className = { extraSmallDarkBtn} > { text } </button>
      </Link>
    </div>
  )
}