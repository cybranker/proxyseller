import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ucFirst} from "../../utils";


const PostsScreen = (props) => {
  const id = +props.match.params.id;
  const {posts} = props;

  return (
    <div className="container">
      <h1 className="text-center m-1">List Posts User #{id}</h1>
      {posts.map((it, i) => (it.userId === id && <div key={it.id}>
          <h3>{ucFirst(it.title)}</h3>
          <p>{ucFirst(it.body)}</p>
          <hr/>
        </div>))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state['DATA'].posts,
});


export default connect(mapStateToProps)(PostsScreen);
