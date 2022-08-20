import { Box, Grid } from "@mui/material"
import { useState } from "react"
import FormDataTable from './FormDataTable'
import FormInputComponent from './FormInputComponent'

const FormsComponent = (props) => {

    const [ usersLocal, setUsersLocal ] = useState(props.users)

    const handleAddUser = ( user ) => {
        let newUsers = usersLocal.map( (u) => { return u })
        newUsers.push(user)
        setUsersLocal( newUsers )
    }

    return(
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                p:8,
            }}
        >
            <Grid container spacing={8}>
                <Grid item xs={12} lg={4}>
                    <FormInputComponent handleAddUser={handleAddUser}/>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <FormDataTable users={usersLocal}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormsComponent