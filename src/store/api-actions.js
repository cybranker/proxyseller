import {loadUsers, loadPosts, loadAlbums} from "./action";


export const fetchUsersList = () => (dispatch, _getState, api) => (
  api.get(`/users`)
    .then(({data}) => dispatch(loadUsers(data)))
);

export const fetchPostList = () => (dispatch, _getState, api) => (
  api.get(`/posts`)
    .then(({data}) => dispatch(loadPosts(data)))
);

export const fetchAlbumsList = () => (dispatch, _getState, api) => (
  api.get(`/albums`)
    .then(({data}) => dispatch(loadAlbums(data)))
);
