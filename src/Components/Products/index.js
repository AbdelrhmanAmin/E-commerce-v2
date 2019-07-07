import React, { Component } from 'react';
import './style.css';
class Product extends Component {
    // state = {  }
    render() {
        let product = this.props.Data;
        return (
               <li id='product'>
                    <div id='wish-btn'>
                    <a id='wish' title="add to wish-list"><i class="fa fa-heart fa-2x"></i></a>
                    </div>
                    <div id='img-container'>
                        <img src={product.image} />
                    </div>
                    <div id='context'>
                        <div id="text">
                        <p id='title'>{product.title}</p>
                        <p id='price'>{product.price}$</p>
                        </div>
                        <div id="add" title="add to cart"><i class="fa fa-plus fa-2x"></i></div>
                    </div>
                </li>
        );
    }
}

export default Product;