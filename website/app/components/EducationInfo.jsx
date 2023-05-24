export const EducationInfo = ({ education }) => {
  return (
    <div className = "bg-[#373737] w-[100px] h-[160px] sm:w-[210px] sm:h-[100px] rounded-2xl text-center p-[10px] sm:hover:scale-105">
      <p className = "text-[#F6A693] text-xl">{education.year}</p>
      <p className = "whitespace-pre-line text-sm">{education.details}</p>
    </div>
  )
}