import { TextField, Button, Box, Typography } from "@mui/material"
import { useState } from "react"
import axios from '../../lib/axios/config'
import { useUsers } from "../../hooks/useUsers"
import { inputsChecker } from "../../utils/utils"

export const addUser = async (
    firstName, lastName, address, ssn
) => {
    const response = await axios
        .post(
            '/api/members',
            {
                firstName: firstName,
                lastName: lastName,
                address: address,
                ssn: ssn
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

const FormInputComponent = ({handleAddUser}) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ SSN, setSSN ] = useState('')
    const [ updating, setUpdating ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ msg, setMsg ] = useState('')
    const [ timer, setTimer ] = useState(null)

    const usersQuery = useUsers()
    const timeStop = 120000

    const handleRefetchUsers = async () => {
        const data = await usersQuery.refetch()
        let temp_timer = setTimeout(() => {
            handleRefetchUsers()
        }, timeStop)
        setTimer(temp_timer)
    }

    const resetTimer = () => {
        clearTimeout(timer);
        let temp_timer = setTimeout(() => {
            handleRefetchUsers()
        }, timeStop)
        setTimer(temp_timer)
    }

    const handleFirstName = (e) => { 
        resetTimer()
        setError(false)
        setFirstName(e.target.value) 
    }
    const handleLastName = (e) => { 
        resetTimer()
        setError(false)
        setLastName(e.target.value) 
    }
    const handleAddress = (e) => { 
        resetTimer()
        setError(false)
        setAddress(e.target.value) 
    }
    const handleSSN = (e) => { 
        resetTimer()
        setError(false)
        setSSN(e.target.value) 
    }

    const handleReset = () => {
        resetTimer()
        setFirstName('')
        setLastName('')
        setAddress('')
        setSSN('')
    }

    const handleSave = async () => {
        resetTimer()
        setUpdating(true)
        const check = inputsChecker(firstName, lastName, address, SSN)
        if( !check.error ){
            try{
                const response = await addUser(firstName, lastName, address, SSN)
                let newUser = {
                    firstName: response.firstName,
                    lastName: response.lastName,
                    address: response.address,
                    ssn: response.ssn,
                }
                handleAddUser(newUser)
                handleReset()
            } catch(error) {
                setError(true)
                setMsg(error?.response?.data?.message || 'Something went wrong during saving.') 
            }
        } else {
            setError(true)
            setMsg(check.msg)
        }
        setUpdating(false)
    }

    return(
        <Box
            sx={{
                display: 'flex',
                flexFlow: 'column'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    gap:2
                }}
            >
                <TextField data-testid='forms-first-name-input' label={'First Name'} value={firstName} placeholder="First Name" onChange={handleFirstName} variant="outlined" />
                <TextField data-testid='forms-last-name-input' label={'Last Name'} value={lastName} placeholder="Last Name" onChange={handleLastName} variant="outlined" />
                <TextField data-testid='forms-address-input' label={'Address'} value={address} placeholder="Address" onChange={handleAddress} variant="outlined" />
                <TextField data-testid='forms-ssn-input' label={'SSN'} value={SSN} placeholder="SSN" onChange={handleSSN} variant="outlined" />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    py:4
                }}
            >
                <Button 
                    sx={{
                        disabled:updating,
                        border:'1px solid #000000',
                        borderRadius:8,
                        '&:hover': {
                            backgroundColor: '#daf5de',
                            cursor: 'pointer'
                        },
                    }}
                    onClick={ handleReset }
                >
                    <Typography sx={{ color:'#000000', mx:2 }}>Reset</Typography>
                </Button>
                <Button
                    sx={{ 
                        disabled:updating,
                        border:'1px solid #000000',
                        borderRadius:8,
                        '&:hover': {
                            backgroundColor: '#daf5de',
                            cursor: 'pointer'
                        },
                    }}
                    onClick={ handleSave }
                >
                    <Typography sx={{ color:'#000000', mx:2 }}>Save</Typography>
                </Button>
            </Box>
            { error &&
                <Box sx={{
                    background: '#f0c0c0',
                    borderRadius: 6,
                    textAlign: 'center',
                    py:1
                }}>
                    <Typography color={'#bf0f0f'}>{msg}</Typography>
                </Box>
            }
        </Box>
    )
}

export default FormInputComponent