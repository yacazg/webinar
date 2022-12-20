import Head from "next/head"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>

      <Layout>
        <Hero />
        <Features />
      </Layout>
    </>
  )
}
