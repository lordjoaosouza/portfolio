import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stacks from '@/components/Stacks'
import Scroll from '@/components/Scroll'
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
      <Scroll />
    </>
  )
}
