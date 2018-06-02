import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {addValue: ''};
    this.addNewPost = this.addNewPost.bind(this);
    this.changeAddPost  = this.changeAddPost.bind(this);
  }

  changeAddPost (e) {
    this.setState({addValue: e.target.value});
  }

  addNewPost () {
    console.log('add value is', this.state.addValue);
    this.props.addPost(this.state.addValue);
  }
  render () {
    console.log('add ppost', this.props);

    return (<div>
        <input type="text" value={this.state.addValue} onChange={this.changeAddPost}/>
        <button onClick={this.addNewPost}>Submit</button>
      </div>);
  }
}

export default AddPost;
