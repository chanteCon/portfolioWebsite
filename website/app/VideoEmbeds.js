
export const VideoEmbeds = (url) => {
  console.log(url)
  if (url.includes("https://www.youtube.com")) {
    const id = url.split("v=")[1]
    return `https://www.youtube.com/embed/${id}`
  }
  if (url.includes("https://drive.google.com")) {
    const newUrl = url.split("/view?")[0]
    console.log(`The new URL is ${newUrl}/preview`)
    return `${newUrl}/preview`
  } 
}