export const ActionType = {
  LOAD_USERS: `LOAD_USERS`,
  LOAD_POSTS: `LOAD_POSTS`,
  LOAD_ALBUMS: `LOAD_ALBUMS`
};

export const loadUsers = (users) => ({
  type: ActionType.LOAD_USERS,
  payload: users
});

export const loadPosts = (posts) => ({
  type: ActionType.LOAD_POSTS,
  payload: posts
});

export const loadAlbums = (albums) => ({
  type: ActionType.LOAD_ALBUMS,
  payload: albums
});
