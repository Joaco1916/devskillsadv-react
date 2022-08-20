import Head from 'next/head'
import Footer from '../src/components/Footer'
import FormsComponent from '../src/components/forms/FormsComponent'
import NavBar from '../src/components/NavBar'
import { useUsers } from "../src/hooks/useUsers"
import { Box, CircularProgress } from "@mui/material"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  
  const users = useUsers()
  const router = useRouter();

  const [ timer, setTimer ] = useState(null)

  const handleTimer = (newTimer) => {
    setTimer(newTimer)
  }

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

      <NavBar timer={timer}/>
      { users.status != 'error' && users.status != 'success' ?
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            py:20
          }}
        >
          <CircularProgress sx={{ color: 'green'}}/>
        </Box>
        :
        <FormsComponent users={ users.status == 'success' ? users.data : null } timer={timer} handleTimer={handleTimer}/>
      }

      <Footer />
    </div>
  )
}
