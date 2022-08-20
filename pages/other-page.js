import Head from 'next/head'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar'

export default function OtherPage() {
  return (
    <div>
      <Head>
        <title>Devs Skills adv - React</title>
        <meta name="description" content="Created by Joaquin Rodriguez" />
      </Head>

      <NavBar />
      <About />

      <Footer />
    </div>
  )
}