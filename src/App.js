import './App.css';
import Home from './pages/home';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Contact from './pages/Contact';

 
function App() {
  return (
    <>
     <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
