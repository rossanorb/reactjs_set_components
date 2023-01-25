import { Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Login from "./views/login"
import Register from "./views/register"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
