import * as Mui from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';

import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { CurrentUser } from '../contexts/CurrentUser';

export default function Login() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    // Stores the entered user credentials
    const [userCredentials, setUserCredentials] = useState({
        userName: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null) // Stores the error state of the form

    const [isLoggingIn, setIsLoggingIn] = useState(false) // Stores the state of the login button

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoggingIn(true)

        axios.post(`${process.env.REACT_APP_SERVER_URL}authentication`, userCredentials)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                setCurrentUser(response.data.user)
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    setErrorMessage(error.response.data.message)
                } else {
                    setErrorMessage(error.message)
                }
            })
            .finally(() => {
                setIsLoggingIn(false)
            })
    }

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const handlePasswordVisibility = () => {
        if (passwordVisibility) {
            setPasswordVisibility(false)
        } else {
            setPasswordVisibility(true)
        }
    }

    const handleInputFieldChange = (credentials) => {
        errorMessage && setErrorMessage(null)
        setUserCredentials(credentials)
    }

    return (
        <Mui.Box sx={{
            p: 5
        }}>

            <Mui.Container component='main' maxWidth='lg'>

                <Mui.Box sx={{
                    p: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: '20px'
                }}>
                    <Mui.Box sx={{
                        p: 2,
                        height: '600px',
                        border: '2px solid #3EC199',
                        borderRadius: '20px'
                    }}>

                        <Mui.Grid container sx={{
                            height: 'inherit',
                            borderRadius: '20px 10px 10px 20px',
                            background: 'white'
                        }}>

                            <Mui.Grid item xs={6}>
                                <Mui.Box sx={{
                                    height: '100%',
                                    borderRadius: '10px 0px 0px 10px',
                                    backgroundImage: 'url(guitar-music-strings-bass-guitar-wallpaper-preview.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    backgroundBlendMode: 'multiply'
                                }}>

                                </Mui.Box>
                            </Mui.Grid>

                            <Mui.Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Mui.Box component='form' onSubmit={handleSubmit} p={5}>

                                    <Mui.Typography variant='h4' mb={5}>L O G I N</Mui.Typography>

                                    <Mui.Grid container spacing={2} justifyContent='center'>

                                        <Mui.Grid item xs={12}>
                                            <Mui.TextField
                                                error={errorMessage != null}
                                                name='username'
                                                id='username'
                                                label='Username'
                                                required
                                                fullWidth
                                                autoFocus
                                                autoComplete='username'
                                                // inputProps={{ pattern: '/^[a-zA-Z0-9]+$/' }}
                                                helperText={errorMessage}
                                                onChange={e => handleInputFieldChange({ ...userCredentials, userName: e.target.value })}
                                            />
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <Mui.TextField
                                                name='password'
                                                type={passwordVisibility ? 'text' : 'password'}
                                                id='password'
                                                label='Password'
                                                placeholder={passwordVisibility ? 'Enter Password' : '**********'}
                                                required
                                                fullWidth
                                                autoComplete='current-password'
                                                InputProps={{
                                                    endAdornment: (
                                                        <Mui.InputAdornment position='end'>
                                                            <Mui.IconButton onClick={handlePasswordVisibility}>
                                                                {passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                            </Mui.IconButton>
                                                        </Mui.InputAdornment>
                                                    )
                                                }}
                                                onChange={e => handleInputFieldChange({ ...userCredentials, password: e.target.value })}
                                            />
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <LoadingButton
                                                variant='contained'
                                                size='large'
                                                fullWidth
                                                type='submit'
                                                loading={isLoggingIn}
                                                loadingIndicator="Logging In…"
                                            >
                                                <span>Login</span>
                                            </LoadingButton>
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <Mui.Link component='button' underline='none' onClick={() => navigate("/signup")}>
                                                <Mui.Typography>
                                                    Don't have an account? Sign Up.
                                                </Mui.Typography>
                                            </Mui.Link>
                                        </Mui.Grid>
                                    </Mui.Grid>

                                </Mui.Box>
                            </Mui.Grid>

                        </Mui.Grid>


                    </Mui.Box>
                </Mui.Box>

            </Mui.Container >

        </Mui.Box >
    )
}