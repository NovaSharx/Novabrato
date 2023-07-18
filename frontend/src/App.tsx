import { FC, ReactElement } from 'react';
import './stylesheets/css/main.css';
import ThemeProvider from './components/contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VirtualGuitarProvider from './components/contexts/VirtualGuitarContext';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Exercises from './components/Exercises/Exercises';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

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
              <Route path="about" element={<About />} />
            </Routes>
            <Footer />
          </VirtualGuitarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;