import React from 'react';
const Sliders = props=>{
    console.log(props.data)
    
    const slides=props.data.map((slide, i)=>{
        return(
          <div className="slides" key={i}>
              <a href={slide.href}>
              <img src={`images/${slide.imgName}.png`}/>
              </a>
          </div>
        )
      })
      return (
        <div className="slide">{slides}</div>
      )
}
export default Sliders;