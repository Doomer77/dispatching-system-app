import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import { Box, AppBar, Toolbar, InputBase, Typography } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '20%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        with: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

export const Header = () => {
    const [value, setValue] = useState('' || undefined)
    return (
        <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            fontFamily: 'Arial',
                            fontWeight: 900,
                            fontStyle: 'italic',
                        }}
                    >
                        RDS
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            type="text"
                            name="search"
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={value}
                            onChange={event => setValue(event.target.value)}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
