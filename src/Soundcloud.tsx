import React from 'react';

const Music: React.FC = () => {
  return (
    <div className="soundcloud-container">
      <iframe
        width="70%"
        height="450"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/227585249&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="Chief Keef Playlist"
      ></iframe>

    </div>
  );
};

export default Music;
