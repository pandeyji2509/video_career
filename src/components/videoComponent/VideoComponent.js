//data is passed as props in video.js redered in videocomponenet.js
//to get any data pass it as props.data.(requirement)
//data is getting fetched from data.json in src/assets
import React,{useState,useRef} from 'react'
import './videoComponent.css';
import {BsFillPlayCircleFill} from "react-icons/bs";
import {AiOutlinePauseCircle} from "react-icons/ai"
function VideoComponent(props) {
  const[show,toggleshow]=useState(true);

 
    const videoRef=useRef();
  
    //play pause button
    // const handlePlay=()=>{
    //   videoRef.current.play();
    // };
    // const handlePause=()=>{
    //   videoRef.current.pause();
    //   setInterval(()=>{
    //       const ved=document.getElementById('do');
    //       ved.style.display="none";
    //   },3000);
    // };

    return (
    <div className='outer-container'>
    <div className='inner-container'>
    <div className='overlay'>{props.data.company} | {props.data.position} </div>
      <video id="myVideo" className="video" type="video/mp4" src={props.data.video} ref={videoRef} playsInline controls loop muted/>
          
          {/* for play pause button   */}
          {/* <p onClick={()=>toggleshow(!show)}>{show?<BsFillPlayCircleFill onClick={handlePlay}  className="btn" size={30}/>:<AiOutlinePauseCircle onClick={handlePause} id="do"  className="btn" size={30}/>}</p>
          {show && null} */}
    </div>
    </div>
  )
}


export default VideoComponent;