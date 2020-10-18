import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import LaptopForm from './containers /laptops/LaptopForm';
import LaptopList from './containers /laptops/LaptopList';
import LaptopShow from './containers /laptops/LaptopShow';
import Home from './laptops/Home';
import NavBar from './components/styles/NavBar'

class App extends Component {
  
  render () {
    return (
      <Router>
        <h1> Laptops </h1>
        <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/laptops' component={LaptopList}/>
          <Route exact path='/laptops/new' component={LaptopForm}/>
          <Route exact path='/laptops/:id' component={LaptopShow}/>
          <Route render={(props) => <div> Page loading </div>} />
        </Switch>
      </div>
      </Router>
    );
  }
}


export default App;
