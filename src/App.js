import "./App.css";
import Main from "./components/Main/Main";
import Statistics from "./components/Statistics/Statistics";
import Statistics2 from "./components/Statistics/Statistics2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/statistics2" component={Statistics2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
