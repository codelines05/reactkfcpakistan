/* eslint-disable no-unused-vars */
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/deals/productdetails/ProductDetail";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/collection/:category">
            <ProductList />
          </Route>
          <Route exact path="/product/:slug">
            <ProductDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
