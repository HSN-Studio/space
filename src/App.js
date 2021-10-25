import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  //states
  const [darkMode, setdarkMode] = useState(false);

  //Lifecycle Methods

  //JSX
  return (
    <Router>
      <div className="App">
        <Header darkMode={darkMode} />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Home></Home>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/planet"}></Route>
        </Switch>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
