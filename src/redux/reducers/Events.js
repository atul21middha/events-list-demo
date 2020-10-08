import {ADD_NEW_EVENT, DELETE_EVENT, GET_EVENTS_LIST, UPDATE_EVENT} from "../ActionTypes";

const initialState = {
  eventsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_LIST: {
      return {
        ...state,
        eventsList: action.payload
      }
    }
    case ADD_NEW_EVENT: {
      return {
        ...state,
        eventsList: action.payload
      }
    }
    case UPDATE_EVENT: {
      return {
        ...state,
        eventsList: action.payload
      }
    }
    case DELETE_EVENT: {
      return {
        ...state,
        eventsList: action.payload
      }
    }
    default:
      return state;
  }
}