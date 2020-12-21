import LogIn from "./Components/LogIn"
import Principal from "./Components/Principal"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./Components/PrivateRoute"
import { AuthProvider } from "./Components/Auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/Principal" component={Principal} />
            <Route path="/Login" component={LogIn} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
