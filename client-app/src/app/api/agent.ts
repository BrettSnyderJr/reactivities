/*
  This page allows us to make http requests to our .net server-side api
*/

import { store } from './../stores/store';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Activity } from '../models/activity';
import { ActivityCategory } from '../models/activityCategory';

// Simulates waiting for a response
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

// Just simulating the app waiting for response so we can observe loading screens
axios.interceptors.response.use(
  async <T>(response: AxiosResponse<T>) => {
    await sleep(500);
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        if (typeof data === 'string') {
          toast.error('bad request');
        }
        if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
          history.push('/not-found');
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        }

        break;
      case 401:
        toast.error('unauthorized');
        break;
      case 404:
        history.push('/not-found');
        //toast.error('not found');
        break;
      case 500:
        store.commonStore.setServerError(data);
        history.push('/server-error');
        //toast.error('server error');
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

// Generic api requests
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

// Activity api endpoints
const Activities = {
  list: () => requests.get<Activity[]>('/activities'),
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => requests.post<void>('/activities', activity),
  update: (activity: Activity) =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.delete<void>(`/activities/${id}`),
};

// Activity api endpoints
const ActivityCategories = {
  list: () => requests.get<ActivityCategory[]>('/activity-categories'),
};

const agent = {
  Activities,
  ActivityCategories,
};

export default agent;
