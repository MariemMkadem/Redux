import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

//create class component because i need to use handleClick function
//sending request using axios to get the photos detail
class PictureDetail extends Component {

  state = {
    post: null
  }
  //get data from jsonplaceholder.typicode.com/photos/
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/photos/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        //console.log(res.data);
      });
  }
  handleClick = () => {
    this.props.addPost(this.props.match.params.post_id);
    this.props.history.push('/WishList');

  }
  render() {

    const post = this.state.post ? (
      <div className="post card" >
        <div className="card-content">
          <span className="card-title DarkSalmon-text"> {this.state.post.title}</span>
          <img src={this.state.post.thumbnailUrl} alt="im" style={{ width: 200, height: 200 }} />
          <div className="center">
            <button className="btn success" onClick={this.handleClick}>
              Add  Pic
    </button>
          </div>


        </div>
      </div>
    ) : (
        <div className="center">Loading post...</div>
      );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

//get the data and  map them  to the props
//ownProps contain information about the route
//use id the find the particular photo
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

// map owr dispatches to owr props
//pass dispatch method as parameter
//mapping dispatch to props 
const mapDispatchToProps = (dispatch) => {
  return {
    //dispatch action add 
    addPost: (id) => dispatch(addPost(id))
  }
}

//invoke connect function and wrapping home component 
//connect compnent to redux store
//pass mapStateToProps into connect function to knows what data we want 
//to grub from redux 
export default connect(mapStateToProps, mapDispatchToProps)(PictureDetail)
