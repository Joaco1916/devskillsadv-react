import { Box, Typography } from "@mui/material"

const Footer = () => {
    return(
        <Box 
            sx={{ 
                display: 'flex',
                background: '#94d69e',
                justifyContent: 'space-around',
                py:2,
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }}
        >
            <Typography color={'#ffffff'}>Copyright</Typography>
            <Typography color={'#ffffff'}>All rights reserved</Typography>
        </Box>
    )
}

export default Footer