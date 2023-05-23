export const PopUpBackDrop = ({onClick}) => {
  return (
    <div
    className = "w-screen h-screen fixed top-0 left-0 fixed z-500"
    onClick = { onClick }
    ></div>
  )
}