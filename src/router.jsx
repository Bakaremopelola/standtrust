import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SolarInitiative from './pages/SolarInitiative';
import OurServices from './pages/OurServices';
import Community from './pages/Community';
import Aesthetics from './pages/Aesthetics';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/solar-initiative',
        element: <SolarInitiative />,
    },
    {
        path: '/our-services',
        element: <OurServices />,
    },
    {
        path: '/community',
        element: <Community />,
    },
    {
        path: '/aesthetics',
        element: <Aesthetics />,
    },
]);

export default router;
