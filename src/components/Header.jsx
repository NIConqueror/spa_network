import React from 'react';
import '../components/Header.css'
import logo from '../../src/logo.svg';

function Header() {
    return <header className='header'>
        <img src = {logo}></img>
            </header>
}

export default Header;