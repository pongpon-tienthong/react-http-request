import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.props.id && this.props.id !== this.state.loadedPost.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then(res => {
            this.setState({ loadedPost: res.data });
          });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    let post = (
      <div className="FullPost">
        <p style={{ textAlign: "center" }}>Please select a Post!</p>
      </div>
    );

    if (this.props.id) {
      post = (
        <div className="FullPost">
          <p style={{ textAlign: "center" }}>Loading ...</p>
        </div>
      );
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
