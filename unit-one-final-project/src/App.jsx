import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import SingleAPI from './Pages/SingleAPI';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/api'>
          <SingleAPI />
        </Route>
      </Switch>
    </>
  );
}

export default App;
