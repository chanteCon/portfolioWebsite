export const EducationInfo = ({ education }) => {
  return (
    <div className = "bg-[#373737] w-[210px] h-[100px] rounded-2xl text-center p-[10px] sm:hover:scale-105">
      <p className = "text-[#F6A693] text-xl">{education.year}</p>
      <p className = "whitespace-pre-line text-sm">{education.details}</p>
    </div>
  )
}