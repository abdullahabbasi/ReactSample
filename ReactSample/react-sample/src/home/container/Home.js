import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import {fetchPosts, addPost} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddPost from '../components/AddPost';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';

import {Grid, Row,Col, Table, Button, Pagination} from 'react-bootstrap';

// import mock from '../mock/mock'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {'posts': []};
    this.props.fetchPosts();
  }

  componentDidMount () {
    console.log('component did mount ', this.prop)

    // axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    //   .then(res => {
    //     console.log('resp ', res);
    //     this.state.posts = res.data;
    //     this.setState(this.state);
    //   });
  }

  render () {
    const cols = (props) => {
        return this.props.posts.map(function(value, index) {
          return (<tr>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.body}</td>
          </tr>)
        });
    }
    console.log('home render', this.props);
    if (this.props.posts && this.props.posts.length > 0) {
      let active = 7;
      let items = [];
      for (let number = 1; number <= 4; number++) {
        items.push(
          <Pagination.Item active={number === active}>{number}</Pagination.Item>
        );
      }
      return (<div>
                <Grid>
                  <Row className="show-grid">
                    <Col md={3}>
                      <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
                    </Col>
                    <Col md={9}>
                    <Table striped bordered condensed hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Body</th>
                          <th>Email ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cols()}
                      </tbody>
                    </Table>
                    <Pagination bsSize="large">{items}</Pagination>
                    </Col>
                  </Row>
                </Grid>
      <div>
        { this.props.posts.map(function(post, index) { return (<div key={index}>{post.name}</div>); }) }
      </div>
          <AddPost addPost={this.props.addPost}/>

        </div>);
    } else {
      return (<div>Not loaded</div>);
    }

  }
}

function mapStateToProps (state) {
  console.log('mapStateToProps', state);
  return {
    posts : state.posts
  }
}

function mapDispatchToProps (dispatch) {
  console.log('mapDispatchToProps', dispatch);
  return bindActionCreators({
    fetchPosts, addPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
