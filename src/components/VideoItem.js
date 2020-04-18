import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
   return (
    <div className="item video-item">
      <img 
        className="ui image"
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="head">
          {video.snippet.title}
        </div>
      </div>
    </div>
   );
};

export default VideoItem;