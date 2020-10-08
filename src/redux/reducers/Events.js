import {ADD_NEW_EVENT, DELETE_EVENT, GET_EVENTS_LIST, UPDATE_EVENT} from "../ActionTypes";

const initialState = {
  eventsList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_LIST: {
      return {
        ...state,
        eventsList: action.payload
      }
    }
    case ADD_NEW_EVENT: {
      console.log("in reducer", action.payload)
      return {
        ...state,
        eventsList: [{...action.payload.event, id: action.payload.id}, ...state.eventsList]
      }
    }
    case UPDATE_EVENT: {
      return {
        ...state,
        eventsList: state.eventsList.map(event => event.id === action.payload.id ? action.payload : event)
      }
    }
    case DELETE_EVENT: {
      return {
        ...state,
        eventsList: state.eventsList.filter(event => event.id !== action.payload)
      }
    }
    default:
      return state;
  }
}