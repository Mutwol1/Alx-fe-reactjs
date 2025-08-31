import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <Footer />
    </div>
  );
}

export default App;
