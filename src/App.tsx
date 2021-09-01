import React from 'react';
import './styles/defaults.scss'
import Header from "./components/header/Header";
import Panel from "./components/panel/Panel";
import About from "./components/about/About";
import Services from "./components/services/Services";

const App = () => (
    <div>
        <Header/>
        <Panel/>
        <About/>
        <Services/>
    </div>
);

export default App;
