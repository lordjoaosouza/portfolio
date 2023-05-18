import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Stacks from '@/components/Stacks'
import Scroll from '@/components/Scroll'
import Contact from '@/components/Contact'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joao Souza</title>
      </Head>
      <Navbar />
      <Hero />
      <Stacks />
      <AboutMe />
      <Contact />
      <Scroll />
    </>
  )
}
