import "./globals.css"
import { Roboto } from "next/font/google";
import { Nav } from "./components/Nav";
import { BackgroundImage } from "./components/BackgroundImage";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
 

export const metadata = {
  title: {
    default: "Chantelle Conlon Scoullar",
    template: "%s | Chantelle Conlon Scoullar"
  },
  description: "Chantelle Conlon Scoullar BCompSc. I design and build software solutions to solve real world problems. I have experience with frontend and backend web development, game development, SaaS projects and more.",
  keywords: ["Next.js", "Python", "Java", "JavaScript", "Solidity", "C", "UNSW", "Portfolio"],
  authors: [{name: "Chantelle Conlon Scoullar"}],
  creator: "Chantelle Conlon Scoullar",
  openGraph: {
    title: "Chantelle Conlon Scoullar",
    description: " design and build software solutions to solve real world problems.",
    url: "https://www.chantellecs.com",
    siteName: "Chantelle CS Portfolio",
    images: [{
      url: "/images/laptop.jpg",
      width: 800,
      height: 800
    }]
  },
  robots: {
    googleBot: {
      index: true
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={roboto.className}
        suppressHydrationWarning={true}
      >
        <main
        className="flex min-h-screen flex-col items-center justify-between font-light pb-[20px]" 
         >
         <BackgroundImage 
          className = "w-screen h-screen"
         />
          {children}
        </main>
        <Nav/>
      </body>
    </html>
  )
}
 