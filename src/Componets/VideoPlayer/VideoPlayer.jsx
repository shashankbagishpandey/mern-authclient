import React, { useRef } from 'react'
import './VideoPlayer.css'
import v1 from '../../assets/Logistics.mp4'
function VideoPlayer({playState,setPlayState}) {
    const player=useRef(null);

    const closePlayer=(e)=>{
        if(e.target === player.current){
           setPlayState(false);
        }
    }
  return (
       <div className={`videoplayer ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
    
      <video src={v1} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
