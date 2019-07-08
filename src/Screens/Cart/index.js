import React, { Component } from 'react';
import './style.css';
import Header from '../../Components/Header';
import Products from '../../Components/Products';
var storedNames = JSON.parse(localStorage.getItem("items"));
class index extends Component {
    state = {
        items: storedNames
    }
    

increaser = (item) => {
    let items = [...this.state.items];
    const newCart = items.map((cartItem) => {
        if(cartItem.id == item.id){
            cartItem.count += 1
        }
        return cartItem
    })
    this.setState({
        items: newCart
    })
  }
  decreaser = (item) => {
    let items = [...this.state.items];
    const newCart = items.
    map((cartItem) => {
        if(cartItem.id == item.id){
            if(cartItem.count > 1){
                cartItem.count -= 1;
                }
        }
        return cartItem
    })
    this.setState({
        items: newCart
    })
  }
    onDelete = (index) => {
        let sliced = [...this.state.items]
        sliced.splice(index,1);
        this.setState({
            items: sliced
        })
      }
    render() {
        let total = this.state.items.reduce((sum ,i) => (
            Math.floor(sum += i.price * i.count)
        ),0);
        return (
            <div>
                <Header />
                <p>total :{total}</p>
                <div id='inner'>
                {
                    this.state.items.map((x) => {
                        return(
                                <div>
                                <ul id='counter'>
                                            <li>                                    
                                            <button onClick={() => this.increaser(x)} className='inc'><i class="fa fa-sort-up fa-2x"></i></button>
                                            </li>
                                            <li>                                    
                                                <strong>{x.count}</strong>
                                            </li>
                                            <li>                                    
                                            <button onClick={() => this.decreaser(x)} className='dec'><i class="fa fa-sort-down fa-2x"></i></button>
                                            </li>
                                        </ul>
                                    <a href='/1'><img src={x.img} /></a>
                                    <div>
                                        <h4>{x.title}</h4>
                                        <h5>${x.price}</h5>
                                    </div>
                                    <button onClick={() => this.onDelete(x)}>DELETE</button>
                                </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default index;