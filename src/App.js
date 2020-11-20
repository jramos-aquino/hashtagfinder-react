import './App.css';
import {About} from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
