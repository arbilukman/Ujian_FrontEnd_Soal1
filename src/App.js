import React, { Component } from 'react';
import './App.css';
import Article from './Welcome';

class App extends Component {
  constructor(){
    super();
    this.state = {user:''};
  }
  
  klik(){
    this.setState({user: this.refs.nama.value});
  }
  
  render() {
    return (
    <div>
      <div className="container">
      <div className="col-md-4">
      <ul className="nav nav-tabs">
        <li><a  data-toggle="tab" href="#login"><h3>Login</h3></a></li>
        <li><a data-toggle="tab" href="#welcome"><h3>Welcome</h3></a></li>
      </ul>
      </div>
      </div>
      <div className="container">
      <div className="col-md-4">
      <br/>
      <div className="tab-content">
      <div id="login" className="tab-pane fade">
      <form>
        <div className="form-group">
        <input className="form-control" type="text" ref="nama"
        placeholder="Your Name" />
        </div>
      </form>
      <button className="btn btn-success" onClick={()=>{this.klik();}}>Submit</button>
      </div>
      <div id="welcome" className="tab-pane fade">
      <Article konten={this.state.user} />
      </div>
    </div>
    </div>
    </div>
    </div>
    
    );
  }
}

export default App;
