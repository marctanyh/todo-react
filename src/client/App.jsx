import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

  constructor() {

    super();

    console.log("constructing");

    this.state = {

      chore: "",

      chores: [],

      errorMessage: ""

    }

  }

  changeHandler(event){

    this.setState({chore: event.target.value});

    console.log("change", event.target.value);

  }

  addItem() {

    if (this.state.chore.length > 1 && this.state.chore.length < 200) {

      console.log(this.state.chore);

      let listOfChores = this.state.chores;
      
      listOfChores.push(this.state.chore);

      this.setState({chores: listOfChores})

      console.log(listOfChores);

      this.refs.input.value = "";

      this.setState({chore: ""});

      this.setState({errorMessage: ""})

    } else {

      console.log(this.state.chore);

      this.setState({errorMessage: "More than 1 character"})

    }
    
  }

  render() {
    const toDoList = this.state.chores.map (todo => {
      return <li>{todo}</li>
    });
    return (
      
      <div>
        Welcome.
        <br></br>
        <input onChange={(event)=>{this.changeHandler(event);}} ref="input" /> 
        <button onClick={()=>{this.addItem()}}>Add</button> <br /><br />
        {this.state.errorMessage} <br />
        <ul>{toDoList}</ul>
      </div>
    );
  }
}

export default hot(module)(App);
