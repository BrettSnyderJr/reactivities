import { createContext, useContext } from 'react';
import ActivityStore from './activityStore';
import ActivityCategoryStore from './activityCategoryStore';
import CommonStore from './commonStore';

interface Store {
  activityStore: ActivityStore;
  activityCategoryStore: ActivityCategoryStore;
  commonStore: CommonStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  activityCategoryStore: new ActivityCategoryStore(),
  commonStore: new CommonStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
