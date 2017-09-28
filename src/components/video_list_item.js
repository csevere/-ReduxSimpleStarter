import React from 'react';

const VideoListItem = ({video}) =>{
    const imageUrl = video.snippet.thumbnails.default.url; 
    
    return(
        <li className  = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left d-flex">
                    <img className = "media-object" src = {imageUrl} />
                </div>

                <div className = "media-body">
                    <div className = "media-heading text-center p-3">{video.snippet.title}</div> 
                </div>
            </div>
        </li>
    );
};

export default VideoListItem

// const video = props.video; identical to using video in lieu of props
// so const VideoListItem = (props)  >> const VideoListItem = ({video})
//get imageUrl from console in youtube object