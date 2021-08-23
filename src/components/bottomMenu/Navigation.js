import React from "react";
import "./Style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import TableChartIcon from '@material-ui/icons/TableChart';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import About from '../../screens/About';
import Home from '../../screens/Home';
import Store from '../../screens/Store';
import Cart from '../Cart/Cart.js';
 
export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <NavLink exact to="/" className="nav__link">
          <HomeIcon />
            Anasayfa
          </NavLink>
          <NavLink exact to="/about" className="nav__link">
          <TableChartIcon/>
            Hakkımızda
          </NavLink>     
          <NavLink exact to="/store" className="nav__link">
          <BusinessCenterIcon/>
            İşletme
          </NavLink>
          <NavLink exact to="/cart" className="nav__link">
          <ShoppingCartIcon/>
            Sepet
          </NavLink>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
