import { useContext } from 'react';
import { StoreContext } from './storeContext';

export const useStores = () => {
  return useContext(StoreContext);
};
