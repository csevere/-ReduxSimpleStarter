import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
    const videoItems = props.videos.map((video)=>{
        return (
            <VideoListItem 
                onVideoSelect = {props.onVideoSelect}
                key = {video.etag} 
                video = {video}/>
        )
    })
    return(
        <ul className  = "col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList; 

//we've taken a prop from the app in index.js and passed it down to video_list-item via props