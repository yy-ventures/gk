'use client';

import React, { useState } from 'react';

import style from './navbar.module.scss';

const {
  navbar,
  logoContainer,
  logo,
  list,
  item,
  subItem,
  dropdownItem,
  dropdownList,
  itemText,
  menuBtn,
  openList,
  active,
  bar
} = style;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={navbar}>
      <div className={logoContainer}>
        <div className={logo}></div>
      </div>
      <ul className={toggle ? `${list} ${openList}` : `${list}`}>
        <li className={item}>home</li>
        <li className={item}>about us</li>
        <li className={item}>services</li>
        <li className={item}>healthcare</li>
        <li className={dropdownItem}>
          <span className={itemText}>people</span>
          <ul className={dropdownList}>
            <li className={subItem}>corporate</li>
            <li className={subItem}>health force</li>
            <li className={subItem}>join us</li>
          </ul>
        </li>
        <li className={item}>stories</li>
        <li className={dropdownItem}>
          <span className={itemText}>gallery</span>
          <ul className={dropdownList}>
            <li className={subItem}>photo album</li>
          </ul>
        </li>
        <li className={item}>locator</li>
      </ul>
      <button className={toggle ? `${menuBtn} ${active}` : `${menuBtn}`} onClick={handleToggle}>
        <span className={bar}></span>
      </button>
    </div>
  );
};

export default Navbar;
