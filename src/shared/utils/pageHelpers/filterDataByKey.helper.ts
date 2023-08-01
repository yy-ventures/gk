import { IAnnuallyServe } from '@/shared/types/annuallyServe';

export function filterDataByKey(data: IAnnuallyServe[], key?: string) {
  return data.filter((item) => item.key === key);
}

export function reverseFilterDataByKey(data: IAnnuallyServe[], key?: string) {
  return data.filter((item) => item.key !== key);
}
