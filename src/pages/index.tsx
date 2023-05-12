import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joao Souza</title>
      </Head>
      <Navbar />
      <Hero />
    </>
  )
}
