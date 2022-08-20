import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/router'
import { useUsers } from "../hooks/useUsers"

const NavBar = () => {

    const router = useRouter()

    const usersQuery = useUsers()

    const handleRefetchUsers = async () => {
        const data = await usersQuery.refetch()
    }

    return(
        <AppBar 
            position="static" 
            sx={{ 
                background:'green'
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        handleRefetchUsers()
                        router.push('/')
                    }}
                >
                    <HomeIcon />
                </IconButton>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        flexGrow: 1,
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        handleRefetchUsers()
                        router.push('/')
                    }}
                >
                    Home
                </Typography>
                <Button 
                    color="inherit"
                    onClick={() => {router.push('/other-page')}}
                >
                    Other page
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar