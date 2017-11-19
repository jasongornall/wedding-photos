import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPosts()
  }

  render() {
    const { post, prev, next } = this.props;

    return (
      <div>
        <div className="nav">
          <div>
            <Link className = "btn btn-default btn-lg active" to="/">&lt; Back To Gallery</Link>
          </div>
          <Link type="button" className="btn btn-default btn-lg active" to={`/posts/${prev}`}> Previous </Link>
          <Link type="button" className="btn btn-default btn-lg active" to={`/posts/${next}`}> Next </Link>
        </div>
        <div className="single-photo">
          <a className="image-wrap" href={`/public/${post}`} download>
            <img src={`/public/${post}`}/>
            <div className="opacity"> </div>
            <span className="hover-text"> Click to Download </span>
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {

  const current_id = parseInt(ownProps.match.params.id);
  var prev, next;

  if (current_id == 0) {
    prev = posts.length - 1
    next = 1
  } else if (current_id == posts.length - 1) {
    next = 0
    prev = current_id - 1
  } else {
    next = current_id + 1
    prev = current_id - 1
  }

  return {
    prev: prev,
    next: next,
    post: posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchPosts})(PostsShow);
