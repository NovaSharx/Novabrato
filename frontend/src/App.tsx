import { FC, ReactElement } from 'react';
import './stylesheets/css/main.css';
import ThemeProvider from './components/contexts/ThemeContext';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App: FC = (): ReactElement => {

  return (
    <div id='app'>
      <ThemeProvider>
        <Navigation />
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;