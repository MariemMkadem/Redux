# Bitbucket 

a simple albums app

## Getting Started

To get the frontend running locally:

- Clone this repo
### Installing 

- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use port 4100 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of package.json

### Functionnality overview

The example application is a simple albums app. It uses a custom a fake online rest api for testing 

### General functionality:

 - consult HOME PAGE includes list of album and wishlist button
 - On click on album name consult the photo list page
 - On click on wishlist button consult  the wishlist page
 - consult PHOTO LIST PAGE to Get photos list of selected album
 - On click on photo consult the photo page
 - Acces to PHOTO PAGEto  get the photo details and add photo to wishlist page
 - On click on add photo to wishlist you can add the photo to wishlist
 - WISHLIST PAGE: get the list of added photos
 
 ### The general page backdonw looks like this : 
 
 - Home page list of albums  :  (URL: / )
 - Photo list page  : (URL: /http://localhost:3000/albums/id? )
 - Photo Dtail  : (URL: http://localhost:3000/photos/?id)
 - Wishlist page : (URL: http://localhost:3000/Wishlist)

