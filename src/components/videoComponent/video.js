import React from 'react'
import datas from '../../Assets/data.json';
import VideoComponent from './VideoComponent';
function video() {
  return (
    datas.map((data) =>
      <VideoComponent data={data} />
    )
  )
}
export default video;
