import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header'
import Navigation from './components/Navigation'
import React from 'react';
import './App.css';
import Sidebar from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/* Siderbar */}
      <Sidebar/>
      <Router>
        <main>
          <Header/>
          <Navigation/>
        </main>
      </Router>
    </div>
  );
}
 
export default App;
