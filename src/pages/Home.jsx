import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/heroComponent/Hero';
import Services from '../components/heroComponent/Services';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhyChoose from '../components/heroComponent/WhyChoose';
import WhoWeAre from '../components/heroComponent/WhoWeAre';
import WhatWeDo from '../components/heroComponent/WhatWeDo';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="font-sans text-gray-800 flex flex-col w-full overflow-x-hidden items-center justify-start">
            <Header />
            <Hero />
            <Services />
            <WhyChoose />
            <WhoWeAre />
            <WhatWeDo />
            <Footer />
        </div>
    );
}

export default Home;
