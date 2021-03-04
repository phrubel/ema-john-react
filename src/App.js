import React from 'react';
// import component 
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

// Import react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  return (
    <div>
      <Header></Header>
      {/* Use Router */}
      <Router>
        <Switch>
          <Route path='/Shop'>
          <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
