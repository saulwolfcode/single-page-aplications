import React, { Component } from 'react';
import Sliders from './components/Sliders';
// import {products,slides,filters} from "./json/body.json";
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { 
  //     slides,
  //     products,
  //     filters
  //    };
  // }
  state={
    slides:[],
    products:[],
    filters:[]
  }

  async componentWillMount(){
      const res = await fetch('http://remote.fizzmod.com/body.json')
      const data = await res.json();
        this.setState({
              slides:data.slides,
              products:data.products,
              filters:data.filters
        })
    }
  render() {
    const slides=this.state.slides.map((slide, i)=>{
      return(
        <div className="slides">
            <a href={slide.href}>
            <img src={`images/${slide.imgName}.png`}/>
            </a>
        </div>
      )
    })
    return (
      <div className="App">
          <div className="grid-product">
          <Sliders data={this.state.slides}/>
          </div>
      </div>
    );
  }
}

export default App;