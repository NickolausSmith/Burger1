// Dependencies
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';
// Stylings 
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
       <Layout>
          <Switch>
         <Route path="/checkout" component={Checkout}/>
         <Route path="/orders" exact component={Orders}/>
         <Route path="/" exact component={BurgerBuilder}/>
         </Switch>
       </Layout>
      </div>
    );

  }
  
}

export default App;
