import {Route, Switch} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import PageLinks from './Pages/PageLinks'
import PostsPage from './Pages/PostsPage'


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact><Dashboard /></Route>
        <Route path='/pages'><PageLinks /></Route>
        <Route path='/posts'><PostsPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
