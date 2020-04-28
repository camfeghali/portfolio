/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";

const root = document.getElementById("root");

export const App = () => {


  // MunkeyReact.render(<Alert message="This is my message to you hou houu"/>, root)

  // Diffing / Reconciliation of two stateful components two components
  
  
  // MunkeyReact.render(<Stateful title="Task 1"/>, root)

  MunkeyReact.render(<WishList title="Task 1"/>, root)

};

class Stateful extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return(
      <div>
        <h2>{this.props.title.toString()}</h2>
        <button onClick={update}>Update</button>
      </div>
    );
  }
}

class WishList extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      wish: {
        title: "I wan't to be a programmer"
      }
    }
    this.update = this.update.bind(this);
  }

  update() {
    let newValue = this.inputWish.value;  // here inputWish is the input DOM element
    let wish = Object.assign({}, this.state.wish);
    // this.state.width = newValue;  // BAD PRACTICE as we are mutating the state

    wish.title = newValue;
    this.setState({
      wish
    });
  }

  render() {
    return (
      <div>
        <h2>Your wish list</h2>
        <input type="text" ref={(inputWish) => { this.inputWish = inputWish }} placeholder="What's your wish?"></input>
        <button onClick={this.update}>Update</button>

        <div>
          {this.state.wish.title}
        </div>
      </div>
    );
  }

}


function update() {
  MunkeyReact.render(<Stateful title={(new Date()).toString()}/>, root)
}


class Alert extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Munkey React !"
    };
  }

  changeTitle(title) {
    this.setState({title: title})
  }

  render() {
    return(
      <div className="alert-container">
        <h2>{this.state.title}</h2>
        <div>
          {this.props.message}
        </div>
        <Button framework="Angular"> I <Heart/> React</Button>
        <button onClick={() => this.changeTitle("Baboon React")}>Change Title</button>
      </div>
    );
  }
};

function Heart(props) {
  return (
    <span style={props.style}>&hearts;</span>
  )
};

function Button (props) {
  return (<button onClick={() => alertMessage(props.framework)}>{props.children}</button>);
};

function alertMessage(framework) {
  alert(`Actually, I love ${framework}`)
}

function Greeting (props) {
  return(
    <div className="greeting">
      <h2>
        Welcome {props.message}
      </h2>
      <Button framework="Angular"> I <Heart/> React</Button>
      <ChangeTitleButton framework="Angular"> I <Heart/> React</ChangeTitleButton>
    </div>
  );
}