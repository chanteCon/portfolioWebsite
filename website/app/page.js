import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style = {{ backgroundColor: '#0E0F0E' }}>
      <section
      style = {{ backgroundColor: '#0E0F0E' }} >
      </section>
      <img
        style = {{filter: 'contrast( 0.88)', opacity: '0.7' }}
        src ={"/images/homePageImage.png"}
        alt="Picture of laptop"
        priority
      />
    </main>
  )
}
