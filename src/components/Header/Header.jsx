import React, { useState } from 'react';

import './Header.css';
import { images } from '../../constants/index';

const navbar_items = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels'];
const navbar_links = ['Shop', 'Account', 'Menu'];



const Header = () => {
    const [left, setLeft] = useState(null);

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-list'>
                <a href="/" className='app__navbar-logo'>
                    <img src={ images.tesla__logo } alt="tesla" />
                </a>
                <li className='app__navbar-items'>
                    {
                        navbar_items.map(item => (
                            <li 
                                onPointerEnter={ (e) => {
                                    // console.log(e.getBoundingClientRect());
                                } }
                                key={ item }
                            >
                                <a href="/">{ item }</a>
                            </li>
                        ))
                    }
                </li>
                <li className='app__navbar-links'>
                    {
                        navbar_links.map(item => (
                            <li key={ item }>
                                <a href="/">{ item }</a>
                            </li>
                        ))
                    }
                </li>
                <div className='app__navbar-item-background'
                    style={{
                        left: left,
                    }}
                />
            </ul>
        </nav>
    );
};

export default Header;