import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
// wakka
class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, index) => {
      return (
        <Link key={index} to={`https://jasongornall.github.io/wedding-photos/posts/${index}`}>
          <img className="img-responsive" src={`https://jasongornall.github.io/wedding-photos/public/small/${post}`}/>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Photos from Jason and Chelsea's Wedding!</h3>
        <div className="container">
          <div className="row imagetiles">
            {this.renderPosts()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
