import axios from '../../utils/axios';
import {ADD_NEW_EVENT, DELETE_EVENT, GET_EVENTS_LIST, UPDATE_EVENT} from "../ActionTypes";
import {fetchError, fetchStart, fetchSuccess} from "./Common";

export const onGetEventsList = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get('/events').then(data => {
      if (data.status === 200) {
        dispatch({type: GET_EVENTS_LIST, payload: data.data})
        dispatch(fetchSuccess())
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    }).catch(error => {
      dispatch(fetchError('Something went wrong'));
    })
  }
};

export const onAddNewEvent = event => {
  return dispatch => {
    dispatch(fetchStart());
    axios.post('/events', {event}).then(data => {
      console.log("Added", data);
      if (data.status === 201) {
        dispatch({type: ADD_NEW_EVENT, payload: data.data})
        dispatch(fetchSuccess())
      }else {
        dispatch(fetchError('Something went wrong'));
      }
    }).catch(error => {
      dispatch(fetchError('Something went wrong'));
    })
  }
};

export const onUpdateEvent = event => {
  return dispatch => {
    dispatch(fetchStart());
    axios.put(`/events/${event.id}`, {event}).then(data => {
      if (data.status === 200) {
        dispatch({type: UPDATE_EVENT, payload: data.data.event})
        dispatch(fetchSuccess())
      }else {
        dispatch(fetchError('Something went wrong'));
      }
    }).catch(error => {
      dispatch(fetchError('Something went wrong'));
    })
  }
};

export const onDeleteEvent = eventId => {
  return dispatch => {
    dispatch(fetchStart());
    axios.delete(`/events/${eventId}`).then(data => {
      if (data.status === 200) {
        dispatch({type: DELETE_EVENT, payload: eventId})
        dispatch(fetchSuccess())
      }else {
        dispatch(fetchError('Something went wrong'));
      }
    }).catch(error => {
      dispatch(fetchError('Something went wrong'));
    })
  }
};