import React, { Component } from 'react';
import Header from '../../Components/Header';
import Products from '../../Components/Products';
import Data from '../../Data/products.json';
import Cart from '../Cart';
class Home extends Component {
    state = {
        filterString: '',
    }
      render(){
      return (
        <div className="App">
          <Header onTextChange={text => {
              this.setState({filterString: text})
          }}/>
          <ul id='product-container'>
          {
            Data.items.filter((x) =>
              x.title.toLowerCase().includes(this.state.filterString.toLowerCase())
            ).map(x => <Products Data={x} onAdd={this.props.onAdd}/>)
          }
          </ul>
        </div>
      );
    }}

export default Home;