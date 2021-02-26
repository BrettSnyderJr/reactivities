import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Activity } from '../models/activity';
import { v4 as uuid } from 'uuid';

export default class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;
  submitting = false;

  constructor() {
    makeAutoObservable(this);
  }

  //Computed Property
  get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }

  //Actions
  // Arrow functions automatically bind this to class
  loadActivities = async () => {
    try {
      const activities = await agent.Activities.list();

      // Format the date to be accepted by the html date type on the form
      activities.forEach((activity) => {
        activity.date = activity.date.split('T')[0];
        this.activityRegistry.set(activity.id, activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  selectActivity = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id);
  };

  setSelectedActivity = (activity: Activity) => {
    this.selectedActivity = activity;
  };

  cancelSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  createActivity = async (activity: Activity) => {
    this.setLoading(true);

    activity.id = uuid();

    try {
      await agent.Activities.create(activity);

      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
        this.setEditMode(false);
        this.setLoading(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  updateActivity = async (activity: Activity) => {
    this.setLoading(true);

    try {
      await agent.Activities.update(activity);

      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
        this.setEditMode(false);
        this.setLoading(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  deleteActivity = async (id: string) => {
    this.setLoading(true);

    try {
      await agent.Activities.delete(id);

      runInAction(() => {
        this.activityRegistry.delete(id);

        if (this.selectedActivity?.id === id) {
          this.cancelSelectedActivity();
        }

        this.setLoading(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoading(false);
      });
    }
  };

  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.setEditMode(true);
  };

  closeForm = (id?: string) => {
    this.setEditMode(false);
  };

  setEditMode = (state: boolean) => {
    this.editMode = state;
  };
}