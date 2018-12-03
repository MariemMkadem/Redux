import React from 'react';
import { connect } from 'react-redux'

const WishlistPage = (props) => {

  const { lists } = props
   console.log(lists.length)
  const wishesList = lists.length ? (
    lists.map(list => {
     //console.log(list)
      return (
        <div className="list card" >
          <div className="card-content" >
            <span className="card-title DarkSalmon-text"> {list.title}</span>
            <img src={list.thumbnailUrl} alt="im" />
          </div>
        </div>
      )
    })
  ) : (
      <div className="center">No picture to show</div>
    );

  return (
    <div>
      <div className="container home">
        <h4 className="center">Wishlist</h4>
        {wishesList}

      </div>
    </div>
  )
}
//get the data and  map them  to the propos
const mapStateToProps = (state) => {

  return {
    lists: state.lists
  }
}



export default connect(mapStateToProps)(WishlistPage);
