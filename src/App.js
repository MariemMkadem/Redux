import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import PictureDetail from './components/PictureDetail'
import PictureList from './components/PictureList';
import WishListPage from './components/WishlistPage';
class App extends Component {
  render() {
    return (
      //calll Navbar component and configuring root for each page 
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/WishList' component={WishListPage}/> 
          <Route path='/albums/:post_id' component={PictureList} />
          <Route path='/photos/:post_id' component={PictureDetail} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;