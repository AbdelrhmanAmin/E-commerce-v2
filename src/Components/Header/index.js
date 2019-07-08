import React, { Component } from 'react';
import './style.css';
class Header extends Component {
    render() {
        return (
            <ul id='header-container'>
                
                <li id="logo">
                    <a href='/'><i className="fa fa-joomla fa-4x"></i></a>
                </li>
                <li class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for? " onKeyUp={e => this.props.onTextChange(e.target.value)}/>
                    </div>
                </li>
                <li id="cart">
                    <a href="/Cart"><i title="cart" className="fa fa-cart-plus"></i></a>
                    <i title="wish-list" class="fa fa-heart"></i>
                </li>
            </ul>
        );
    }
}

export default Header;