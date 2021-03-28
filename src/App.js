import "./App.css";
import Main from "./components/Main/Main";
import Main2 from "./components/Main/Main2";
import Statistic from "./components/Statistic/Statistic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/m" exact component={Main2} />

          <Route path="/statistic" component={Statistic} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
