import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} />
            {/* may put portfolio in the same homepage route. TBD */}
            {/* <Route path="/about" component={About} /> */}
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;
