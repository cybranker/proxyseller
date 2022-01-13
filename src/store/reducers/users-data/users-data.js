import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  users: [],
  posts: [],
  albums: []
};

export const usersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_USERS:
      return extend(state, {
        users: action.payload
      });
    case ActionType.LOAD_POSTS:
      return extend(state, {
        posts: action.payload
      });
    case ActionType.LOAD_ALBUMS:
      return extend(state, {
        albums: action.payload
      });
    default:
      return state;
  }
};
