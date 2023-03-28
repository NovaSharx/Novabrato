import * as Mui from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';

import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useTheme } from '@emotion/react';
import { CurrentUser } from '../contexts/CurrentUser';

export default function SignUp() {

    const navigate = useNavigate()
    const theme = useTheme()
    const { setCurrentUser } = useContext(CurrentUser)

    const [accountDetails, setAccountDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: ''
    })

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const [errorMessage, setErrorMessage] = useState(null) // Stores the error state of the form

    const [isSigningUp, setIsSigningUp] = useState(false) // Stores the state of the login button

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSigningUp(true)

        axios.post('http://localhost:5000/users', accountDetails)
            .then(response => {
                console.log(response)
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
                setIsSigningUp(false)
            })
    }

    const handlePasswordVisibility = () => {
        if (passwordVisibility) {
            setPasswordVisibility(false)
        } else {
            setPasswordVisibility(true)
        }
    }

    const handleInputFieldChange = (accountInfo) => {
        errorMessage && setErrorMessage(null)
        setAccountDetails(accountInfo)
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

                                    <Mui.Typography variant='h4' mb={5}>S I G N U P</Mui.Typography>

                                    <Mui.Grid container spacing={2} justifyContent='center'>

                                        <Mui.Grid item xs={6}>
                                            <Mui.TextField
                                                name='firstname'
                                                id='firstname'
                                                label='First Name'
                                                required
                                                fullWidth
                                                autoFocus
                                                autoComplete='given-name'
                                                onChange={e => handleInputFieldChange({ ...accountDetails, firstName: e.target.value })}
                                            />
                                        </Mui.Grid>

                                        <Mui.Grid item xs={6}>
                                            <Mui.TextField
                                                name='lastname'
                                                id='lastname'
                                                label='Last Name'
                                                required
                                                fullWidth
                                                autoComplete='family-name'
                                                onChange={e => handleInputFieldChange({ ...accountDetails, lastName: e.target.value })}
                                            />
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <Mui.TextField
                                                name='email'
                                                id='email'
                                                label='Email'
                                                required
                                                fullWidth
                                                autoComplete='email'
                                                onChange={e => handleInputFieldChange({ ...accountDetails, email: e.target.value })}
                                            />
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <Mui.TextField sx={{ mt: 5 }}
                                                name='username'
                                                id='username'
                                                label='Username'
                                                required
                                                fullWidth
                                                autoComplete='username'
                                                onChange={e => handleInputFieldChange({ ...accountDetails, userName: e.target.value })}
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
                                                autoComplete='new-password'
                                                InputProps={{
                                                    endAdornment: (
                                                        <Mui.InputAdornment position='end'>
                                                            <Mui.IconButton onClick={handlePasswordVisibility}>
                                                                {passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                            </Mui.IconButton>
                                                        </Mui.InputAdornment>
                                                    )
                                                }}
                                                onChange={e => handleInputFieldChange({ ...accountDetails, password: e.target.value })}
                                                helperText={errorMessage}
                                            />
                                            {/* <Mui.TextField sx={{ mt: 1 }}
                                                name='confirm-password'
                                                type={passwordVisibility ? 'text' : 'password'}
                                                id='confirm-password'
                                                label='Confirm Password'
                                                required
                                                fullWidth
                                                autoComplete='new-password'
                                            /> */}
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <LoadingButton
                                                variant='contained'
                                                size='large'
                                                fullWidth
                                                type='submit'
                                                loading={isSigningUp}
                                                loadingIndicator="Creating Account…"
                                            >
                                                <span>Create An Account</span>
                                            </LoadingButton>
                                        </Mui.Grid>

                                        <Mui.Grid item xs={12}>
                                            <Mui.Typography>
                                                <Mui.Link href='/login'>Already have an account? Log in.</Mui.Link>
                                            </Mui.Typography>
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