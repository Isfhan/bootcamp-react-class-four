import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Content heading="Welcome To React State Hook App" />
      <Footer copyright="2020" founder="Isfhan Ahmed" />
    </div>
  );
}

export default App;
