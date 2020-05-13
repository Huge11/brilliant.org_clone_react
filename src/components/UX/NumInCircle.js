import React from 'react';


function NumInCircle({num=1, className}){
  return(
    <span className="fa-stack fa-2x">
      <i className="fas fa-circle fa-stack-2x"></i>
      <strong className="fa-stack-1x fa-inverse">{num}</strong>
    </span>
  )
}

export default NumInCircle;