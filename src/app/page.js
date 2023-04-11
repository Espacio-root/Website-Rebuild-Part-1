import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col font-poppins'>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}
