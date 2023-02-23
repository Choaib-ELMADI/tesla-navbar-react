import React, 
       { 
         useState, 
         useRef, 
         useEffect 
       } from 'react';

import './Header.css';
import { images } from '../../constants/index';

const navbar_items = [
    'Model S',
    'Model 3', 
    'Model X', 
    'Model Y', 
    'Solar Roof', 
    'Solar Panels'
];
const navbar_links = [
    'Shop', 
    'Account', 
    'Menu'
];



const Header = () => {
    const [left, setLeft] = useState(null);
    const [width, setWidth] = useState(null);
    const [background, setBackground] = useState("rgba(204, 204, 204, 0)");

    const itemsRef = useRef([]);
    const linksRef = useRef([]);

    useEffect(() => {
      itemsRef.current = 
      itemsRef.current.slice(0, navbar_items.length)
    }, [navbar_items]);

    useEffect(() => {
      linksRef.current = 
      linksRef.current.slice(0, navbar_links.length)
    }, [navbar_links]);
    

  return (
    <nav className='app__navbar'
      onPointerEnter={ 
        () => setBackground("rgba(204, 204, 204, .3)") 
      }
      onPointerLeave={ 
        () => setBackground("rgba(204, 204, 204, 0)") 
      }
    >
      <ul 
        className='app__navbar-list'
      >
        <a href="/" className='app__navbar-logo'>
          <img src={ images.tesla__logo } alt="tesla" />
        </a>
        <ul 
          className='app__navbar-items'
        >
        {
          navbar_items.map((item, i) => (
           <li 
              onPointerEnter={ () => {
                setLeft(itemsRef.current[i].offsetLeft);
                  setWidth(itemsRef.current[i].offsetWidth);
                }}
                key={ `item-${ i }` }
                ref={ elt => itemsRef.current[i] = elt }
            >
              <a href="/">{ item }</a>
            </li>
          ))
        }
        </ul>
        <ul 
          className='app__navbar-links'
        >
        {
          navbar_links.map((link, i) => (
            <li 
              onPointerEnter={ () => {
                setLeft(linksRef.current[i].offsetLeft);
                setWidth(linksRef.current[i].offsetWidth);
              }}
              key={ `link-${ i }` }
              ref={ elt => linksRef.current[i] = elt }
            >
              <a href="/">{ link }</a>
            </li>
          ))
        }
        </ul>
        <div 
          className='app__navbar-item-background'
          style={{
            left: left,
            width: width,
            background: background,
          }}
        />
      </ul>
    </nav>
  );
};

export default Header;