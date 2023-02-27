//data is passed as props in video.js redered in videocomponenet.js
//to get any data pass it as props.data.(requirement)
//data is getting fetched from data.json in src/assets
import React, { useState, useRef } from 'react'
import './videoComponent.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import routes from './routes';
import Apply from './Apply';
function VideoComponent(props) {
  return (
    <Router>
      <div className='outer-container'>
        <div className='inner-container'>
          <div className='overlay'>{props.data.company} | {props.data.position} </div>
          <video id="myVideo" className="video" type="video/mp4" src={props.data.video} playsInline controls loop muted />
        </div>
        <button><Link as={Link} to={"/apply"}>Apply</Link></button>
        <Routes>
          <Route path="/apply"
            element={<Apply/>}>
          </Route>
        </Routes>
      </div>
      <div>
      </div>
    </Router>
  )
}
export default VideoComponent;