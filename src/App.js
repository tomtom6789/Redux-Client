import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";

import { connect } from 'react-redux'
import Home from './laptops/Home';
import About from './laptops/About';
import Footer from './laptops/Footer'
import {Navigation} from './components/styles/NavBar'
import LaptopForm from './containers /laptops/LaptopForm';
import LaptopList from './containers /laptops/LaptopList';
import LaptopShow from './containers /laptops/LaptopShow';
import { fetchLaptops } from './actions/laptop'




class App extends Component {
  
  componentDidMount () {
    this.props.fetchLaptops()
  }




  render () {
    return (
      <Router>

        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path='/laptops' component={LaptopList}/>
          <Route exact path='/laptops/new' component={LaptopForm}/>
          <Route exact path='/laptops/:id' component={LaptopShow}/>
          <Route render={(props) => <div> Page loading </div>} />
        </Switch>
     

        <Footer />
      </Router>
    );
  }
}


export default connect(null, {fetchLaptops} )(App);