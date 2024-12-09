import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurServices from './pages/OurServices';
import Project from './pages/Project';

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
        path: '/projects',
        element: <Project/>
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/services',
        element: <OurServices />,
    },
]);

export default router;
