import React from 'react';
import css from './App.module.css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import MainContainer from "./components/MainContainer/MainContainer";

const App = () => {
    return (
        <div className={css.root}>
          <Header />
          {/*<Container />*/}
          <div className={css.wrapperContainer}>
              <Navigation />
              <MainContainer />
          </div>
        </div>
    );
};

export default App;