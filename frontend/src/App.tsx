import { FC, ReactElement } from 'react';
import './stylesheets/css/main.css';
import ThemeProvider from './components/contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VirtualGuitarProvider from './components/contexts/VirtualGuitarContext';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import CategorySelection from './components/Exercises/CategorySelection';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ExerciseSelection from './components/Exercises/ExerciseSelection';
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
              <Route path="exercises" element={<Exercises />}>
                <Route index element={<CategorySelection />} />
                <Route path="ear-training" element={<ExerciseSelection category={'ear-training'} />} />
                <Route path="theory-&-Knowledge" element={<ExerciseSelection category={'theory-&-knowledge'} />} />
              </Route>
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