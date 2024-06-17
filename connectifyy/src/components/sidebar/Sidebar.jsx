// src/components/Sidebar.js
//Path link wall au cas ou sa marche pas au niveau des navs : connectifyy\src\components\Wall.jsx //
//connectifyy\src\Pages\PageProfile\PagePrincipale.js //
// VideoGallery : connectifyy\src\components\VideoGallery.jsx //

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/PagePrincipale">ALL</Link></li>
        <li><Link to="/Wall">Wall</Link></li>  
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/VideoGallery">Video</Link></li>
        <li><Link to="/MusicGallery">Music</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
