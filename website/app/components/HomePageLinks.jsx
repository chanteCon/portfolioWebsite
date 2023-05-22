export const HomePageLinks = ({link, img}) => {
  return (
  <a 
    href = {link}
    target = "_blank"
    rel="noreferrer noopener"
  >
    <img 
      src = {img}
      width = "20px"
      height = "20px"
    />
  </a>
  )
}