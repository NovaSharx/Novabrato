import * as Mui from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CircularProgress from '@mui/material/CircularProgress';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';

import { useContext } from 'react';
import { CurrentUser } from '../contexts/CurrentUser';

export default function ProfileActions() {

    const { currentUser } = useContext(CurrentUser) // Calls on the CurrentUser context and destructures current user data from CurrentUserProvider 

    const navigate = useNavigate()

    const [anchorElement, setAnchorElement] = useState(null) // Profile menu anchor
    const menuOpen = Boolean(anchorElement) // Open once the menu anchor has been assigned

    // Opens profile menu
    const handleMenuOpen = (event) => {
        setAnchorElement(event.currentTarget)
    }
    // Closes profile menu
    const handleMenuClose = () => {
        setAnchorElement(null)
    }
    // Logs current user out by removing json web token
    const handleLogout = () => {
        navigate("/login")
        localStorage.removeItem('token')
        window.location.reload(false) // Reloads the page using the version of the page cached by the browser.
    }

    // Render buttons depending on current user
    if (currentUser) {
        // Render login and signup if defaultName exists
        if (currentUser.defaultName) {
            return (
                <Fragment>
                    <Mui.Link component='button' underline='none' onClick={() => navigate("/login")}>
                        <Mui.Typography color='white' fontSize={20} mr={5}>Login</Mui.Typography>
                    </Mui.Link>

                    <Mui.Link component='button' underline='none' onClick={() => navigate("/signup")}>
                        <Mui.Typography color='white' fontSize={20} mr={5}>SignUp</Mui.Typography>
                    </Mui.Link>
                </Fragment>
            )
        }
        // Render profile buttons if current user has been established through CurrentUser Context
        else {
            return (
                <Fragment>
                    <Mui.Typography alignSelf='center'>Welcome, {currentUser.userName}</Mui.Typography>

                    <Mui.IconButton onClick={handleMenuOpen}>
                        <AccountCircleIcon fontSize='large' sx={{ color: 'white' }} />
                    </Mui.IconButton>

                    <Mui.Menu
                        anchorEl={anchorElement}
                        open={menuOpen}
                        onClose={handleMenuClose}
                    >
                        <Mui.MenuList>

                            <Mui.MenuItem onClick={handleMenuClose}>
                                <Mui.ListItemIcon>
                                    <PersonIcon />
                                </Mui.ListItemIcon>
                                <Mui.ListItemText>
                                    View Profile
                                </Mui.ListItemText>
                            </Mui.MenuItem>

                            <Mui.MenuItem onClick={handleMenuClose}>
                                <Mui.ListItemIcon>
                                    <ManageAccountsIcon />
                                </Mui.ListItemIcon>
                                <Mui.ListItemText>
                                    Account Settings
                                </Mui.ListItemText>
                            </Mui.MenuItem>

                            <Mui.Divider />

                            <Mui.MenuItem onClick={handleLogout}>
                                <Mui.ListItemIcon>
                                    <LogoutIcon />
                                </Mui.ListItemIcon>
                                <Mui.ListItemText>
                                    Logout
                                </Mui.ListItemText>
                            </Mui.MenuItem>

                        </Mui.MenuList>
                    </Mui.Menu>
                </Fragment>
            )
        }
    }

    // If current user has not been established yet then render loading icon feedback
    return <CircularProgress color='inherit' />
}