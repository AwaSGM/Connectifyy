import React from 'react';
import './HeaderVideo.css'; 

const HeaderVideo = () => {
  return (
    <header className="header-video">
      <video autoPlay loop muted>
        <source src="connectifyy\src\Assets\PageAcceuil\fd_accueil (1).mp4" type="video/mp4" /></video>
      <div className="overlay">
        <h1>Connectify</h1>
        <nav>

          <ul>
            <li><a href="connectifyy\src\Pages\PageAcceuil.js">Accueil</a></li>
            <li><a href="connectifyy\src\Pages\PageConnexion.js">Connexion</a></li>
            <li><a href="connectifyy\src\Pages\PageInscription.js">Inscription</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default HeaderVideo;
