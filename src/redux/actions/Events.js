import axios from '../../utils/axios';
import {DELETE_EVENT, GET_EVENTS_LIST} from "../ActionTypes";

export const onGetEventsList = () => {
  return dispatch => {
    axios.get('/events', {params: {
      page: 1
      }}).then(data => {
      if (data.status === 200) {
        dispatch({type: GET_EVENTS_LIST, payload: data.data})
      }
    }).catch(error => {
      console.log("error", error)
    })
  }
};

export const onAddNewEvent = event => {
  return dispatch => {
    axios.post('/events', {event}).then(data => {
      if (data.status === 200) {
        console.log("added", data)
      }
    }).catch(error => {
      console.log("error", error)
    })
  }
};

export const onUpdateEvent = event => {
  return dispatch => {
    axios.put(`/events/${event.id}`, {event}).then(data => {
      if (data.status === 200) {
        console.log("updated", data)
      }
    }).catch(error => {
      console.log("error", error)
    })
  }
};

export const onDeleteEvent = eventId => {
  return dispatch => {
    axios.delete(`/events/${eventId}`).then(data => {
      if (data.status === 200) {
        dispatch({type: DELETE_EVENT, payload: eventId})
      }
    }).catch(error => {
      console.log("error", error)
    })
  }
};