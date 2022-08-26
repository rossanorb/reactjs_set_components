import { Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Login from "./views/login"
import Users from "./views/users"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
