import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { ActivityCategory } from '../models/activityCategory';

export default class ActivityCategoryStore {
  activityCategoryRegistry = new Array<ActivityCategory>();

  constructor() {
    makeAutoObservable(this);
  }

  // Private methods
  private setActivity = (activityCategory: ActivityCategory) => {
    this.activityCategoryRegistry.push(activityCategory);
  };

  //Actions
  // Arrow functions automatically bind this to class
  loadActivityCategories = async () => {
    try {
      const activityCategories = await agent.ActivityCategories.list();

      //console.log(activityCategories);

      // Format the date to be accepted by the html date type on the form
      activityCategories.forEach((activityCategory) => {
        this.setActivity(activityCategory);
      });
    } catch (error) {
      console.log(error);
    }
  };
}
