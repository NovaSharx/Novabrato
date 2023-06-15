import { FC, ReactElement } from 'react';
import './stylesheets/css/main.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App: FC = (): ReactElement => {

  return (
    <div id='app'>
      <Navigation />
      <Home />
      <Footer />
    </div>
  )
}

export default App;