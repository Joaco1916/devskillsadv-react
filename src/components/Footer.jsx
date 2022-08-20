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
            <Typography data-testid = 'footer-copyright-label' color={'#ffffff'}>Copyright</Typography>
            <Typography data-testid = 'footer-right-reserved-label' color={'#ffffff'}>All rights reserved</Typography>
        </Box>
    )
}

export default Footer