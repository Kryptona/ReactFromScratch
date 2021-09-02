import React from 'react';
import './styles/defaults.scss'
import Header from "./components/header/Header";
import Panel from "./components/panel/Panel";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

const App = () => (
    <div>
        <Header/>
        <Panel/>
        <About/>
        <Services/>
        <Navbar/>
        <Newsletter/>
        <Footer/>
    </div>
);

export default App;
