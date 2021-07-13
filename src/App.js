import React, {Component} from 'react';
import './App.css';
import ProductList from "./ProductList"

class App extends Component{

  state = {
    email:" "
  };

  handleUserInput = e =>
  this.setState({ email: e.target.value});

 addItem = e  => {
  e.preventDefault();
    let emailUser = this.state.email;
    localStorage.setItem('email',emailUser );
  };

render() {
  console.log(this.state.email);
  return (
      <div className="App">
         <header>
          <h1>Random Store</h1>
          <p>Random Fashion Co.</p>
          <p className="newsletter">Subscribe to newsletter:</p>
          <form onSubmit={this.addItem}>
              <input  
                  type="text"
                  onChange = {this.handleUserInput}                  
                  value={this.state.email}
                  placeholder="Subscribe to newsletter"/>
          <button type="submit" name="submit" value="submit">Submit</button>
          </form>
          </header>

          <div className="main">
        <ProductList  title="Product List"/>
    </div>
      </div>
  );
 }
}
export default App;

