import { FC, ReactElement } from 'react';
import './stylesheets/css/main.css';
import ThemeProvider from './components/contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VirtualGuitarProvider from './components/contexts/VirtualGuitarContext';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Exercises from './components/Exercises/Exercises';

const App: FC = (): ReactElement => {

  return (
    <div id='app'>
      <BrowserRouter>
        <ThemeProvider>
          <VirtualGuitarProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="exercises" element={<Exercises />} />
            </Routes>
            <Footer />
          </VirtualGuitarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;