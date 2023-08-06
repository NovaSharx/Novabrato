import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import HeroSection from './HeroSection';
import VirtualGuitarContainer from '../VirtualGuitar/VirtualGuitarContainer';

const Home: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='home' style={{
            backgroundColor: theme.palette.background.secondary
        }}>
            <HeroSection />
            <VirtualGuitarContainer />
        </div>
    );
};
export default Home;