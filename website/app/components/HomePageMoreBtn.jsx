import Link from "next/link"
import { extraSmallDarkBtn } from "../TailwindStyles"

export const HomePageMoreBtn = ({ link, text }) => {
  return (
    <div className = "pt-[10px]">
      <Link
        href = { link }
      >
        <button className = { extraSmallDarkBtn} > { text } </button>
      </Link>
    </div>
  )
}