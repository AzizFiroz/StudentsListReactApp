
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/Pages/NotFound';
import AddUsers from './components/Users/AddUsers';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';
function App() {
  return (
    <Router>

      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ContactUS" component={Contact} />
          <Route exact path ="/students/add" component={AddUsers}/>
          <Route exact path ="/students/edit/:id" component={EditUser}/>
          <Route exact path ="/students/:id" component={ViewUser}/>
          <Route component={NotFound}/>
          
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
