import Head from 'next/head'
import Footer from '../src/components/Footer'
import FormsComponent from '../src/components/forms/FormsComponent'
import NavBar from '../src/components/NavBar'
import { useUsers } from "../src/hooks/useUsers"
import { Box, CircularProgress } from "@mui/material"

export default function Home() {
  
  const users = useUsers()

  return (
    <div>
      <Head>
        <title>Devs Skills adv - React</title>
        <meta name="description" content="Created by Joaquin Rodriguez" />
      </Head>

      <NavBar />
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
        <FormsComponent users={ users.status == 'success' ? users.data : null }/>
      }

      <Footer />
    </div>
  )
}
