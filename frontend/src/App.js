import './App.css';

import * as Mui from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';
import Fretboard from './components/virtualfretboard/Fretboard';
import Exercises from './components/exercises/Exercises';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import IntervalTrainingContainer from './components/exercises/interval-training/IntervalTrainingContainer';
import VirtualGuitarProvider from './components/contexts/VirtualGuitar';
import CurrentUserProvider from './components/contexts/CurrentUser';

function App() {

  let theme = createTheme({
    palette: {
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
      <HashRouter>
        <CurrentUserProvider>
          <ThemeProvider theme={theme}>
            <VirtualGuitarProvider>
              <Mui.Paper square sx={{
                minHeight: '100vh',
                background: 'linear-gradient(0deg, rgba(62,193,153,1) 0%, rgba(62,167,193,1) 91%)'
              }}>
                <Navigation />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='fretboard' element={<Fretboard />} />
                  <Route exact path='exercises' element={<Exercises />} />
                  <Route exact path='exercises/interval-training' element={<IntervalTrainingContainer />} />
                  <Route exact path='login' element={<Login />} />
                  <Route exact path='signup' element={<SignUp />} />
                </Routes>
              </Mui.Paper>
              <Footer />
            </VirtualGuitarProvider>
          </ThemeProvider>
        </CurrentUserProvider>
      </HashRouter>
    </div>
  );
}

export default App;