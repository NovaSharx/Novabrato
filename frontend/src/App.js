import './App.css';

import * as Mui from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Fretboard from './components/Fretboard';
import Exercises from './components/exercises/Exercises';
import Login from './components/user/Login';

function App() {

  let theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3EC199',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#3EA7C1',
        contrastText: '#ffffff',
      }
    },
    typography: {
      fontFamily: 'Comfortaa, sans-serif'
    },
  })

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Mui.Paper square sx={{
            minHeight: '100vh',
            background: 'linear-gradient(0deg, rgba(62,193,153,1) 0%, rgba(62,167,193,1) 91%)'
          }}>
            <Navigation />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/fretboard' element={<Fretboard />} />
              <Route exact path='/exercises' element={<Exercises />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </Mui.Paper>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;