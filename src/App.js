import React from 'react';
// import './App.css';
import './GitHub/assets/StylesMain.css';
import Main from './GitHub/Main';
import Header from './GitHub/Header';
import Footer from './GitHub/Footer';
import SideBar from './GitHub/SideBar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
