import React, { createContext, useState } from 'react';
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
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Email: {loggedInUser.email}</p>
      {/* Use Router */}
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/Shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>

          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>

          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
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
    </UserContext.Provider>

  );
}

export default App;
