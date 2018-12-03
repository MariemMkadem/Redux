import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//create fontionnal component
const PictureList =(props)  =>{

  
  //console.log(this.props)
  //grab the albums from the props
    const { pictures } = props
    const pictureList = pictures.length ? (
     
      pictures.map(item => {
        return (
          <div className="post card" key={item.id}>
            <div className="card-content">
              <Link to={'/photos/' + item.id}>
                <span className="card-title DarkSalmon-text"> {item.title}</span>
              <img src={item.thumbnailUrl} alt ="im"/>
              <div className="center">
        </div>

              </Link>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No pictures to show</div>
    );

    
   
  

    return (
      <div>
        <div className="container hole ">
          {pictureList}
        </div>
      </div>
    )
  }



//get the data and map them to the propos
const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }


}




//invoke connect function and wrapping home component 
//connect compnent to redux store
//pass mapStateToProps into connect function to knows what data we want 
//to grub from redux 
export default connect(mapStateToProps)(PictureList)
