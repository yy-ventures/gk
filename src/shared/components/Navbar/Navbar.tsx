import React from 'react';

import style from './navbar.module.scss';

const {
  navbar, logoContainer, logo, list, item, subItem, dropdownItem, dropdownList
} = style;

const Navbar = () => {
  return (
    <div className={navbar}>
      <div className={logoContainer}>
        <div className={logo}></div>
      </div>
      <ul className={list}>
        <li className={item}>home</li>
        <li className={item}>about us</li>
        <li className={item}>services</li>
        <li className={item}>healthcare</li>
        <li className={dropdownItem}>people
          <ul className={dropdownList}>
            <li className={subItem}>corporate</li>
            <li className={subItem}>health force</li>
            <li className={subItem}>join us</li>
          </ul>
        </li>
        <li className={item}>stories</li>
        <li className={dropdownItem}>gallery
          <ul className={dropdownList}>
            <li className={subItem}>photo album</li>
          </ul>
        </li>
        <li className={item}>locator</li>
      </ul>
    </div>
  );
};

export default Navbar;
