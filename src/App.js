import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import AddPost from './components/AddPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/addpost", name: "AddPost", Component:AddPost}
]

function App() {
  return (

    <div>
      <Router>
        <Header />
        <Navbar />
      

        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <Component />
              )}
            </Route>
          ))}
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>



      </Router>

 

    </div>

  );
}

export default App;
