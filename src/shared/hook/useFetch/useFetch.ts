import { BASE_URL } from '@/config';

import { IUseFetchProps } from './useFetch.type';

export default async function useFetch({ url, revalidateIn }: IUseFetchProps) {
  console.log('URL: ', BASE_URL + url);
  try {
    const res = await fetch(BASE_URL + url, { next: { revalidate: revalidateIn || 60 } });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error: unknown) {
    const errorInstance = error instanceof Error;
    const errMessage = errorInstance ? error.message : 'Something went wrong';
    return errMessage;
  }
}
