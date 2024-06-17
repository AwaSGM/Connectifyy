import React from 'react';
import './PageConnexion.css';

const PageConnexion = () => {
  return (
    <div className="page-connexion">
      <header className="page-header">
        <h1>Connectify</h1>
        <nav>
          <ul>
            <li><a href="connectifyy\src\Pages\PageAcceuil.js">Accueil</a></li>
            <li><a href="connectifyy\src\Pages\PageConnexion.js" className="active">Connexion</a></li>
            <li><a href="connectifyy\src\Pages\PageInscription.js">Inscription</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="left-section">
          <img src="path_to_your_image.jpg" alt="Connexion Background" />
        </div>
        <div className="right-section">
          <div className="connexion-box">
            <h2>Connexion</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" placeholder="Entrez votre email..." />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe..." />
              </div>
              <button type="submit">Se Connecter</button>
            </form>
            <p>Pas de compte ? <a href="connectifyy\src\Pages\PageInscription.js">Inscrivez-vous</a></p>
          </div>
        </div>
      </div>
      <footer className="page-footer">
        &copy; 2023 Connectify. Tous Droits Réservés.
      </footer>
    </div>
  );
};

export default PageConnexion;
