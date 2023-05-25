import Link from "next/link";

export const ProjectsByCategory = ({ filter }) => {
  return (
    <Link 
      data-testid = "projectCategory"
      className= "w-[110px] h-[30px] bg-[#F6A693] rounded-3xl hover:opacity-80  flex justify-center items-center"
      href={{ pathname: "/projects", query: { filter: filter } }}
      >
      <p>{`${filter} Projects`}</p>
    </Link>
  )
}