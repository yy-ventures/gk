import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import { SearchResult } from '@/components/Search';
import { useFetch } from '@/shared/hook';

const Search = async ({ params }: { params: { searchResult: string } }) => {
  const keyword = params.searchResult;

  const searchResult = await useFetch({ url: `/search-results?search=${keyword}` });

  console.log('searchResult: ', searchResult.data.health_centers);

  return (
    <>
      <HeroSection heroFor='search'/>
      <SearchResult searchResultData={searchResult.data.health_centers}/>
      <WorkTogether/>
    </>
  );
};

export default Search;
