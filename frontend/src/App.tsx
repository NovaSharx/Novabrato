import { FC, ReactElement } from 'react';
import './stylesheets/css/main.css';
import ThemeProvider from './components/contexts/ThemeContext';
import VirtualGuitarProvider from './components/contexts/VirtualGuitarContext';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App: FC = (): ReactElement => {

  return (
    <div id='app'>
      <ThemeProvider>
        <VirtualGuitarProvider>
          <Navigation />
          <Home />
          <Footer />
        </VirtualGuitarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;