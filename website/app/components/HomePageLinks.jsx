export const HomePageLinks = ({link, img}) => {
  return (
  <a 
    data-testid = "homePageLinks"
    href = {link}
    target = "_blank"
    rel="noreferrer noopener"
    className = "hover:opacity-80"
  >
    <img 
      src = {img}
      width = "20px"
      height = "20px"
    />
  </a>
  )
} 