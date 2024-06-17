import React from 'react';
import './PageContact.css';

const PageContact = () => {
  return (
    <div className="page-contact">
      <header className="page-header">
        <h1>Connectify</h1>
        <nav>
          <ul>
            <li><a href="connectifyy\src\Pages\PageProfile\PagePrincipale.js">Profil</a></li>
            <li><a href="connectifyy\src\Pages\PageContact.js" className="active">Contact</a></li>
            <li><a href="">Déconnexion</a></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="left-section">
          <img src="connectifyy\src\Assets\PageContact\fd_contact (1).jpg" alt="Contact Background" />
        </div>
        <div className="right-section">
          <div className="contact-box">
            <h2>Nous Contacter</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" placeholder="Entrez votre email..." />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet :</label>
                <input type="text" id="subject" name="subject" placeholder="Sujet de votre message..." />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea id="message" name="message" placeholder="Écrivez votre message..."></textarea>
              </div>
              <button type="submit">Valider</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="page-footer">
        &copy; 2023 Connectify. Tous Droits Réservés.
      </footer>
    </div>
  );
};

export default PageContact;
