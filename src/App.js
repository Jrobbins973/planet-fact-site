import logo from './logo.svg';
import './App.css';
import planetBackground from './starter-code/assets/background-stars.svg'
import Header from './components/Header';
import { Switch, Route} from "react-router-dom";
import Earth from './components/Earth';
import Jupiter from './components/Jupiter';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Neptune from './components/Neptune';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Venus from './components/Venus';

import planetData from './starter-code/data.json'

console.log(planetData[0])
function App() {
  return (
    <div className="App">


      <Header />

    

    <Switch>

    <Route exact path = "/">
      <Mercury />
    </Route>

    <Route exact path = "/venus">
      <Venus />
    </Route>

    <Route exact path = "/earth">
      <Earth />
    </Route>

    <Route exact path = "/mars">
      <Mars />
    </Route>

    <Route exact path = "/jupiter">
      <Jupiter />
    </Route>

    <Route exact path = "/saturn">
      <Saturn />
    </Route>

    <Route exact path = "/uranus">
      <Uranus />
    </Route>

    <Route exact path = "/neptune">
      <Neptune />
    </Route>


    </Switch>
      
        
    </div>
  );
}

export default App;
