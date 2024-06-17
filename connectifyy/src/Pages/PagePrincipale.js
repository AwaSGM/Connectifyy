import React from 'react';
import '../components/sidebar/Sidebar';
import '../components/Gallery';
import '../components/Wall';
import '../components/MusicGallery';
import '../components/VideoGallery';


const PagePrincipale = () => {
  return (

    <div className="profile-page">

      <div className="main-content">

        <Sidebar />
        <div className="content">
          <Wall />
          <Gallery />
          <VideoGallery />
          <MusicGallery />
        </div>
      </div>
    </div>
  );
};

export default PagePrincipale;