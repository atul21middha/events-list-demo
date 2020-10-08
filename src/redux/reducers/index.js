import {combineReducers} from "redux";
import Events from "./Events";
import Common from './Common';

export default combineReducers({
  events: Events,
  common: Common
})