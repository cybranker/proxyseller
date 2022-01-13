import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import UsersScreen from "../users-screen/users-screen";
import PostsScreen from "../posts-screen/posts-screen";


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsersScreen />
        </Route>
        <Route exact path="/posts/:id" component={PostsScreen} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
