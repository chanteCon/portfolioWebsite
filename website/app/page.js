import { HomeImage } from "./components/HomeImage"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24" style = {{ backgroundColor: '#0E0F0E' }}>
      <section className = "flex flex-col flex-1 items-center justify-center  h-100 w-1/2 text-center pt-20"
      style = {{ backgroundColor: '#0E0F0E' }} >
        <div className = "font-light">
          <h1 className= "text-slate-200 text-2xl">I'm a</h1>
          <h1 className = "text-orange-700 text-3xl">programmer</h1>
        </div>
        <p className = "text-slate-200 text-xs pt-8">
           I’m a programmer with a wide skill set. I have experience with frontend and backend web projects, games, SaaS projects and more. I graduated from the University of New South Wales with a bachelor of Computer Science in 2023.
        </p>
      </section>
      <HomeImage
        src ={"/images/homePageImage.png"}
        alt="Picture of laptop"
      />
    </main>
  )
}
