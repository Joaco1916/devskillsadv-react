import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material"
import { useState } from "react"
import { useRouter } from 'next/router'
import axios from '../lib/axios/config'

export const Loggin = async (
    username, password
) => {
    const response = await axios
        .post(
            '/auth',
            {
                username: username,
                password: password
            }
        )
        .then(res => {
            return res
        })
        .catch(error => {
            throw error
        });
    return response.data
}

const Login = () => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ loading, setLoading ] = useState(false)

    const [ error, setError ] = useState(null)

    const router = useRouter();

    const handleUsername = (e) => {
        setError(null) 
        setUsername(e.target.value) 
    }
    const handlePassword = (e) => { 
        setError(null)
        setPassword(e.target.value) 
    }

    const handleLogin = async () => {
        setLoading(true)
        try{
            const response = await Loggin(username, password)
            localStorage.setItem('token', response.token)
            router.push('/')
        } catch(error) {
            let defaultError = { code:'Error', message:'Something went wrong while validating'}
            setError(error?.response?.data || defaultError )
        }
        setLoading(false)
    }

    return(
        <Box
            sx={{
                mx:{xs:4, md:20, lg:40},
                my:40,
                px:{xs:4, md:6, lg:8},
                pt:6,
                pb:2,
                justifyContent:'center',
                border:'2px solid green',
                borderRadius:6,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'column'
                }}
            >
                { error != null &&
                    <Box sx={{
                        background: '#f0c0c0',
                        borderRadius: 6,
                        textAlign: 'center',
                        py:1,
                        mb:4
                    }}>
                        <Typography color={'#bf0f0f'}>{`${error.code} - ${error.message}`}</Typography>
                    </Box>
                }
                <Box
                    sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        gap:2
                    }}
                >
                    <TextField id="username" type={'text'} label={'Username'} value={username} placeholder="Username" onChange={handleUsername} variant="outlined" />
                    <TextField id="password" type={'password'} label={'Password'} value={password} placeholder="Password" onChange={handlePassword} variant="outlined" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        py:2
                    }}
                >
                    <Button
                        sx={{
                            border:'1px solid #000000',
                            borderRadius:8,
                            '&:hover': {
                                backgroundColor: '#daf5de',
                                cursor: 'pointer'
                            },
                        }}
                        onClick={ handleLogin }
                    >
                        { 
                            !loading ?
                                <Typography sx={{ color:'#000000', mx:2 }}>Login</Typography>
                            :
                                <CircularProgress sx={{ color: 'green'}}/>
                        }
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Login