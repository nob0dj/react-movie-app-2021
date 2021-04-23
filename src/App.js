import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import MovieDetail from "./routes/MovieDetail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        {/* 하위 Route중에 첫번째 일치하는 Route가 실행된다. Switch 없이 exact={true} props지정할 수 있다. */}
        <Route path="/about" component={About} />{" "}
        {/* 반드시 Router comp 하위에 있어야 한다.*/}
        <Route path="/movie-detail" component={MovieDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
