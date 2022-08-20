import Head from 'next/head'
import Login from '../src/components/Login'

export default function Home() {
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