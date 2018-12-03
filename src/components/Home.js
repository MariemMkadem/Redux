import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Gellery from '../Gellery.png'

//create fonctionnal component 
const Home = (props) => {


  //console.log(this.props)
  //grab the albums from the props
  const { albums } = props
  const albumsList = albums.length ? (
    albums.map(post => {
      return (
        <div className="post card" key={post.id}>
          <img src={Gellery} style={{ width: 60, height: 60 }} alt="A folder" />
          <div className="card-content">
            <Link to={'/albums/' + post.id}>
              <span className="card-title DarkSalmon-text"> {post.title}</span>
            </Link>
          </div>
        </div>
      )
    })
  ) : (
      <div className="center">No albums to show</div>
    );

  return (
    <div>
      <div className="container home">
        <h4 className="center">Albums</h4>
        {albumsList}
      </div>
    </div>
  )
}


//get the data and  map them  to the propos
const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

//invoke connect function and wrapping home component 
//connect compnent to redux store
//pass mapStateToProps into connect function to knows what data we want 
//to grub from redux 
export default connect(mapStateToProps)(Home)