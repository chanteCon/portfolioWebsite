import './globals.css'
import { Roboto } from 'next/font/google';
import { Nav } from './components/Nav';

const roboto = Roboto({
  weight: '300',
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
        <Nav></Nav>
        {children}
      </body>
    </html>
  )
}
