import { Switch, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import Users from './components/Users';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Form</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Form} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </>
  );
};

export default App;
