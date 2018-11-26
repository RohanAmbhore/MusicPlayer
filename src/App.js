import React, { Component } from 'react';

import Header from './components/Header/Header';
import MainContainer from './containers/HomeContainer/HomeContainer';

function App() {
    return (
        <div>
            <Header></Header>
            <MainContainer></MainContainer>
        </div>
    );
}

export default App;