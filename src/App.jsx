import logo from './logo.svg';
import{Component} from "react"
import './App.css';

class App extends Component   {
  constructor (){
    super()
    let boxes=[]
    let numBoxes=24
    for(let i=0; numBoxes>i; i++){
      boxes.push ({

        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    
    }
    )
    }
    this.state={boxes}
 this.handleBoxClick=this.handleBoxClick.bind(this)
this.getRandomColor=this.getRandomColor.bind (this)  
}
getRandomColor( ){
  return Math.round (Math.random()* 255);

}
handleBoxClick(e){
const newBoxes = this.state.boxes.map ( (box)=>{
if (box.id==e.target.id){
  box.color=`rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
}
return box
})
this.setState({boxes:newBoxes })
}
  
render (){


    return (
      <div className="App">
        <header className="App-header">
{this.state.boxes.map((box)=>{
  return (<button key={box.id} id={box.id} onClick={this.handleBoxClick}>{box.color} </button >)
})
}

          <p>
            evan's cool title
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
