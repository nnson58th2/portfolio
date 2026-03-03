'use client';

import Header from '@/app/components/header';
import Home from '@/app/components/home';
import About from '@/app/components/about';
import Experience from '@/app/components/experience';
import Skills from '@/app/components/skill';
// import Projects from '@/app/components/project';
import Contact from '@/app/components/contact';
import Footer from '@/app/components/footer';
import { CurrentThemeProvider } from '@/app/context/current-theme.context';

const HomePage = () => {
  return (
    <div className="relative w-full flex flex-col text-white">
      <CurrentThemeProvider>
        <Header />
        <Home />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </CurrentThemeProvider>
    </div>
  );
};

export default HomePage;
