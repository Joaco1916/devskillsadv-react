import Head from 'next/head'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function OtherPage() {
  const router = useRouter();

  useEffect( () => {
    const token = localStorage.getItem('token')
    if( token == null) router.push('/login')
  })

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