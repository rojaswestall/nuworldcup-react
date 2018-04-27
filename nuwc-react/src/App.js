import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import FAQ from './components/FAQ';
import About from './components/About';
import Gonzo from './components/Gonzo';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
    <div>
    	<Navbar />
    	<Switch>
    		<Route path="/" exact component={Homepage}/>
    		<Route path="/FAQ" exact component={FAQ}/>
    		<Route path="/gonzo" exact component={Gonzo}/>
    		<Route path="/tournament-info" exact component={Info}/>
    		<Route path="/about-us" exact component={About}/>
			<Route path="/sponsors" exact component={Sponsors}/>
			<Route path="/gallery" exact component={Gallery}/>
			<Route path="/contact-us" exact component={Contact}/>
	    </Switch>
    </div>
    );
  }
}

export default App;





