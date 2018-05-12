
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';
 class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(newItem){
        if(newItem.newPost){
            this.props.posts.unshift(newItem.newPost);
        }
    }
      
  render() {

    const postItems = this.props.posts.map(post => (
        <div key= {post.id}>
            <h3> {post.title}</h3>
            <p> {post.body} </p>
      
        </div>
    ));

    return (
      <div>
        <h1> Save Posts </h1>
        {postItems}
      </div>
    )
  }
}

Posts.proptypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired, 
    newPost: PropTypes.object
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect( mapStateToProps, { fetchPosts })(Posts);