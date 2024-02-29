import { useState } from 'react';

import styles from './App.module.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TwoNumberSum from './components/TwoNumberSum';
import NonConstructibleChange from './components/NonConstructibleChange';


const App = () => {
    let [challenge, setChallenge] = useState('twoNumberSum');

    return (
        <>
            <Header setChallenge={ setChallenge } />
            { challenge === 'twoNumberSum' 
            ? <TwoNumberSum />
            : <NonConstructibleChange /> }
            <Footer />
        </>
    )
}

export default App;
