import axios from '../../utils/axios';
import {GET_EVENTS_LIST} from "../ActionTypes";

export const onGetEventsList = () => {
  return dispatch => {
    axios.get('/events').then(data => {
      if (data.status === 200) {
        dispatch({type: GET_EVENTS_LIST, payload: data.data})
      }
    }).catch(error => {
      console.log("error", error)
    })
  }
};