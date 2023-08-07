/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */

import { useFetch } from '@/shared/hook';

export async function getDataByDivisionId(divisionId: number) {
  const data = await useFetch({ url: `/get-health-centers?division_id=${divisionId}` });

  return data;
}

export async function getDataByKeyword(keyword: string) {
  const data = await useFetch({ url: `get-health-centers?division_id=${keyword}` });

  return data;
}

export async function getDataByHealthCenterId(healthCenterId: number) {
  const data = await useFetch({ url: `get-health-centers?division_id=${healthCenterId}` });

  return data;
}
