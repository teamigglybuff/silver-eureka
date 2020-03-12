import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/main-container.jsx';
import ProductContainer from './containers/product-container.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <MainContainer />
      </Route>
      <Route path="/products/:id">
        <ProductContainer />
      </Route>
    </Router>
  );
}

export default App;
