import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';
import Login from "./components/login.component";
import SignUp from "./components/signup.component"; 
import './index.css';

  
class App extends Component {
  
  render() {
    return (
      <Router>
        
        
           <div class="jumbotron jumbotron-fluid">
                  <div className="components">
                    <br/>
                    <br/>
                    
                    <Switch key={Location.key}>
                      <Route exact path='/' component={Login} />
                      <Route path="/sign-up" component={SignUp} />
                      <Route path="/FileUploader" component={FileUploader} />
                    </Switch>
                   
                  </div>
              
            </div>
            <Footer></Footer>
        
        
      </Router>
    );
  }
}

export default App;
