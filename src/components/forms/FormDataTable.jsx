import { Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from "@mui/material"
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'

const FormDataTable = ({users}) => {
    return(
        <Box>
            { users != null ?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ background: '#94d69e' }}>
                            <TableRow>
                                <TableCell align="center">
                                    <Typography sx={{ fontWeight:600 }}>First Name</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ fontWeight:600 }}>Last Name</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ fontWeight:600 }}>Address</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ fontWeight:600 }}>SSN</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { 
                                users.map((user) => (
                                    <TableRow
                                        key={user.ssn}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{user.firstName}</TableCell>
                                        <TableCell align="center">{user.lastName}</TableCell>
                                        <TableCell align="center">{user.address}</TableCell>
                                        <TableCell align="center">{user.ssn}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            :
                <Box
                    sx={{
                        py:6,
                        textAlign:'center'
                    }}
                >
                    <WarningAmberRoundedIcon fontSize="large"/>
                    <Typography
                        sx={{
                            fontSize:24,
                            fontWeight:600
                        }}
                    >
                        Something went wrong
                    </Typography>
                    <Typography>There was an error while looking for users.</Typography>
                    <Typography>Try to refresh yhe page.</Typography>
                </Box>
            }
        </Box>
    )
}

export default FormDataTable