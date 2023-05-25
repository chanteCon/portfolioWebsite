import { smallLightBtnWithImage } from "../TailwindStyles"

export const LinksBtns = ({ project }) => {
  return (
    project.links.map(link =>
      link.type !== "video" &&
      <a
        data-testid = "ExternalLinkBtn"
        style = {{ lineHeight: '0.9' }}
        href = {link.link}
        key = {link.link}
        target = "_blank"
        rel="noreferrer noopener"
        className = {smallLightBtnWithImage}
      >
      <p className = "self-center" >{link.name}</p>
      <img
        className = "w-[15px] h-[15px] self-center"
        src = '/images/icons/externalLinkBlack.png'
      />
    </a>)
  )
}