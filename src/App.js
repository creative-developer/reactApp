import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AppSidebar from './components/App-sidebar';
import Footer from './components/Footer';
import Pages from './components/Pages';

const App = () => {
return (
<div className="app-wrapper">
  <Header/>
  <AppSidebar/>
  <Pages/>
  <Footer/>
</div>
);
}
export default App;
