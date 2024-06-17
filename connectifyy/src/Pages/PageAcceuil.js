import React from 'react';
import HeaderVideo from '../components/HeaderVideo';

const PageAccueil = () => {
  return (
    <div className="page-accueil">
      <HeaderVideo />

      <section className="bienvenue">
        <h2>Bienvenue</h2>
        <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
      </section>
      <section className="actualite">
        <h2>Actualité</h2>
        <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres...</p>
      </section>
      <section className="qui-sommes-nous">
        <div>
          <h2>Qui sommes nous ?</h2>
          <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier...</p>
        </div>
        <div>
          <img src="connectifyy\src\Assets\PageAcceuil\fd_actualite (1).jpg" alt="Qui sommes nous" />
        </div>
      </section>
      <section className="nous-contacter">
        <h2>Nous Contacter</h2>
        <form>
          <label>Email :</label>
          <input type="email" placeholder="Entrez votre email..." />
          <label>Sujet :</label>
          <input type="text" placeholder="Sujet de votre message..." />
          <label>Message :</label>
          <textarea placeholder="Écrivez votre message..."></textarea>
          <button type="submit">Valider</button>
        </form>
      </section>

      <section className="newsletter">
        <h2>Newsletter</h2>
        <p>Inscrivez-vous à notre newsletter pour rester informé et connecté avec Connectify !</p>
        <input type="email" placeholder="Entrez votre email..." />
        <button type="submit">Valider</button>
      </section>
      <footer className="page-footer">
        &copy; 2023 Connectify. Tous Droits Réservés.
      </footer>
    </div>
  );
};

export default PageAccueil;
