import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header'
import Navigation from './components/Navigation'


function App() {
  return (
    <div className="App">
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
