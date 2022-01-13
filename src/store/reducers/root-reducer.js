import {combineReducers} from "redux";
import {usersData} from "./users-data/users-data";

export const NameSpace = {
  DATA: `DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: usersData
});
