import React, {Component} from 'react';
import './App.css';

class App extends Component{

  state = {
    email:""
  };

  handleUserInput = e =>
  this.setState({ email: e.target.value});

render() {
  return (
      <div className="App">
         <header>
          <h1>Random Store</h1>
          <p>Random Fashion Co.</p>
          <form>
              <input  
                  type="text"
                  onChange = {this.handleUserInput}
                  value={this.state.email}
                  placeholder="Subscribe to newsletter"/>
          <button type="submit" name="submit" value="submit">Submit</button>
          </form>
          </header>
      </div>
  );
 }
}
export default App;

