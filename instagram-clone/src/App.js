import React, { useState } from 'react';
import './App.css';
import Post from './Post'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Henok", 
      caption: "It works", 
      imageUrl: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
    },
    {
      username: "Girum", 
      caption: "Scary shit", 
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
    {
      username: "Dag", 
      caption: "I love plants", 
      imageUrl: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
    }
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Hello, This is an instagram clone built using React.js</h1>
      
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
