import React from 'react';

import { IbuttonProps } from './button.type';

import style from './button.module.scss';
import Link from 'next/link';

const { btn } = style;

const Button = ({ text, url }: IbuttonProps) => {
  return (
    <Link className={btn} href={url}>{text}</Link>
  );
};

export default Button;
