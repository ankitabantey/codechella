import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import page1 from "./Pages/page1";
import page2 from "./Pages/page2";


function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={page1} />
            <Route path="/page2" exact component={page2}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
