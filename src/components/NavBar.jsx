import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import { useRouter } from 'next/router'
import { useUsers } from "../hooks/useUsers"

const NavBar = () => {

    const router = useRouter()

    const usersQuery = useUsers()

    const handleRefetchUsers = async () => {
        const data = await usersQuery.refetch()
        router.push('/')
    }

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/login')
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
                    data-testid = 'navbar-home-logo-button'
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleRefetchUsers}
                >
                    <HomeIcon />
                </IconButton>
                <Typography
                    data-testid = 'navbar-home-label-button'
                    variant="h6" 
                    sx={{ 
                        flexGrow: 1,
                        cursor: 'pointer'
                    }}
                    onClick={handleRefetchUsers}
                >
                    Home
                </Typography>
                <Button
                    data-testid = 'navbar-other-page-button'
                    color="inherit"
                    onClick={() => {router.push('/other-page')}}
                >
                    Other page
                </Button>
                <IconButton
                    data-testid = 'navbar-logout-button'
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mx: 4 }}
                    onClick={logout}
                >
                    <MeetingRoomRoundedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar