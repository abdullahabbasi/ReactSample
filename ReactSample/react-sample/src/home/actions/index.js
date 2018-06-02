import axios from 'axios';
import {FETCH_POSTS, ADD_POST} from '../constants/index'

export function fetchPosts (searchModel) {
  const request = axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
  console.log('actions ', request);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function addPost (newPost) {
  return {
    type: ADD_POST,
    payload: newPost
  }
}
