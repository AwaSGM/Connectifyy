import React from 'react';
import './PageInscription.css';

const PageInscription = () => {
  return (
    <div className="page-inscription">
      <header className="page-header">
        <h1>Page Inscription</h1>
        <nav>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="connectifyy\src\Pages\PageConnexion.js">Connexion</a></li>
            <li><a href="connectifyy\src\Pages\PageConnexion.js" className="active">Inscription</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="left-section">
          <img src="path_to_your_image.jpg" alt="Inscription Background" />
        </div>
        <div className="right-section">
          <div className="inscription-box">
            <h2>Inscription</h2>
            <form>
              <div className="form-group">
                <label htmlFor="first-name">Nom :</label>
                <input type="text" id="first-name" name="first-name" placeholder="Entrez votre nom..." />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Prénom :</label>
                <input type="text" id="last-name" name="last-name" placeholder="Entrez votre prénom..." />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" placeholder="Entrez votre email..." />
              </div>
              <div className="form-group">
                <label>Genre :</label>
                <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="male">Homme</label>
                  <input type="radio" id="female" name="gender" value="female" />
                  <label htmlFor="female">Femme</label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe..." />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Vérification de mot de passe :</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Entrez votre mot de passe..." />
              </div>
              <button type="submit">Valider</button>
            </form>
            <p>Déjà Inscrit ? <a href="#connectez-vous">Connectez-vous</a></p>
          </div>
        </div>
      </div>
      <footer className="page-footer">
        &copy; 2023 Connectify. Tous Droits Réservés.
      </footer>
    </div>
  );
};

export default PageInscription;
