'use client';

import React, { KeyboardEvent, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

import style from './SearchResult.module.scss';
import SearchCard from '../SearchCard/SearchCard';

import { ISearchResult } from '@/shared/types/searchResult';
import { Button } from '@/shared/components';

const {
  searchResult, searchContainer, searchResultContainer, cardContainer
} = style;

interface ISerachResultProps{
  searchResultData: ISearchResult[]
}

const SearchResult = ({ searchResultData }: ISerachResultProps) => {
  const router = useRouter();
  const handleSearchOnKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if ((e.target as HTMLInputElement).value.length <= 3) {
        alert('Please enter more than 3 characters');
      }
      if ((e.target as HTMLInputElement).value.length >= 3) {
        router.push(`/search/${(e.target as HTMLInputElement).value}`);
      }
    }
  };

  return (
    <div className={searchResult}>
      <div className={searchContainer}>
        <input type='text' placeholder='Search...' onKeyUp={handleSearchOnKeyUp}/>
        <Button text='Search' url='#'/>
      </div>
      <div className={searchResultContainer}>
        {
          searchResultData.length === 0 ? <h1>No data found</h1>
            : searchResultData.map(searchData => <div key={searchData.id} className={cardContainer}>
              <SearchCard data={searchData}/>
            </div>)
        }
      </div>
    </div>
  );
};

export default SearchResult;
