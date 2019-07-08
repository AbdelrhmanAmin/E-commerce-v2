import React,{Component} from 'react';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    cart: [],
}
componentDidUpdate = () => {

  localStorage.setItem('items', JSON.stringify(this.state.cart));
}
onAdd = (x) => {
  let cart = [...this.state.cart]
  let currentCartItem = cart.find(cartItem => cartItem.id == x.id)
  if(currentCartItem){
    currentCartItem.count += 1

    this.setState({ cart })

    return
  }
  let obj = {
      img: x.image,
      title: x.title,
      price: x.price,
      id: x.id,
      count: 1,
  }
  this.setState({
      show: true,
      cart: [...this.state.cart,obj]
  })
}
  render(){
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route path='/' exact component={ () => {
            return <Home onAdd={this.onAdd} decreaser={this.decreaser} increaser={this.increaser}/>
          }} />
          <Route path='/Cart' exact component={() => 
             <Cart items={this.state.empty}/>
            } />

        </Switch>
      </div>
    </Router>
  );
}}

export default App;
