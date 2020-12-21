import Agregar from "./Components/Agregar"
import LogIn from "./Components/LogIn"
import Principal from "./Components/Principal"
import Cancion from "./Components/clickCancion"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/Login" component={LogIn} />
          <Route path="/Agregar" component={Agregar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
