import React, { Component } from 'react';
import './style.css';
class Header extends Component {
    render() {
        return (
            <div id='header-container'>
                <div id="logo">
                    <a href='/'><i className="fa fa-joomla fa-4x"></i></a>
                </div>
                <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for? " onKeyUp={e => this.props.onTextChange(e.target.value)}/>
                    </div>
                </div>
                <div id="cart">
                    <i title="cart" className="fa fa-cart-plus"></i>
                    <i title="wish-list" class="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}

export default Header;