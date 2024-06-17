import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageConnexion from './Pages/PageConnexion';
import PageContact from './Pages/PageContact';
import PageInscription from './Pages/PageInscription';
import PageAccueil from './Pages/PageAcceuil';
import NotFoundPage from './Pages/NotFoundPage';
import PagePrincipale from './Pages/PagePrincipale';  
import Sidebar from './components/sidebar/Sidebar'; 
// import 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/All" element={<Sidebar />} />
          <Route path="/connexion" element={<PageConnexion />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/inscription" element={<PageInscription />} />
          <Route path="/PagePrincipale" element={<PagePrincipale />} />  
          <Route path="/" element={<PageAccueil />} />
          <Route path="/*" element={<NotFoundPage />} />  
        </Routes>
      </div>
    </Router>
  );
}
export default App;

// export default App;  // pour exporter le composant App