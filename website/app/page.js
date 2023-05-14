import { HomeImage } from "./components/HomeImage"

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between" style = {{ backgroundColor: '#1A1A1A' }}>
      <section className = "flex flex-col flex-1 items-center justify-center  h-100 w-1/2 text-center pt-40"
      style = {{ backgroundColor: '#1A1A1A' }} >
        <div className = "font-light">
          <h1 className= "text-neutral-400 text-2xl">I'm a</h1>
          <h1 className = "text-amber-700 text-3xl">programmer</h1>
        </div>
        <p className = "text-neutral-400 text-sm pt-8">
           I’m a programmer with a wide skill set. I have experience with frontend and backend web projects, games, SaaS projects and more. I graduated from the University of New South Wales with a bachelor of Computer Science in 2023.
        </p>
      </section>
      <HomeImage
        src ={"/images/homePageImage.png"}
        alt="Picture of laptop"
      />
    </main>
    </>
  )
}
