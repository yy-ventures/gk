import React from 'react';

import AlbumItem from './AlbumItem/AlbumItem';
import { IAlbumsProps } from './Album.types';

import style from './album.module.scss';
import Link from 'next/link';
const { albumContainer, albumGrid, link } = style;

const Album = ({ albumsData }: IAlbumsProps) => {
  return (
    <div className={albumContainer}>
      <div className={albumGrid}>
        {albumsData.map((albumData) => (
          <Link className={link} key={albumData.id} href='#'>
            <AlbumItem data={albumData}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Album;
