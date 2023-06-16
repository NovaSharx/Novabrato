import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import HeroSection from './HeroSection';

const Home: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='home' style={{
            backgroundColor: theme.palette.background.primary
        }}>
            <HeroSection />
        </div>
    );
};
export default Home;