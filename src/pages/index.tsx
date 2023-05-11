import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Joao Souza | Portfolio</title>
      </Head>
      <Navbar />
    </>
  );
}
