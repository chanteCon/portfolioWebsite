import './globals.css'
import { Roboto } from 'next/font/google';
import { Nav } from './components/Nav';
import { BackgroundImage } from './components/BackgroundImage';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});
 

export const metadata = {
  title: 'Chantelle Conlon Scoullar',
  description: 'This website is my portfolio to showcase some of my coding work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main
        className="flex min-h-screen flex-col items-center justify-between font-light" 
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
 