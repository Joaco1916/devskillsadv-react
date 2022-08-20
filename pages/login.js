import Head from 'next/head'
import { useEffect } from 'react'
import Login from '../src/components/Login'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  useEffect( () => {
    const token = localStorage.getItem('token')
    if( token != null) router.push('/')
  })

  return (
    <div>
      <Head>
        <title>Devs Skills adv - React</title>
        <meta name="description" content="Created by Joaquin Rodriguez" />
      </Head>

      <Login />

    </div>
  )
}