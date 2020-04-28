/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";

const root = document.getElementById("root");

export const App = () => {
  MunkeyReact.render(<Alert message="This is my message to you hou houu"/>, root)
};

class Alert extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Munkey React !"
    };
  }

  render() {
    return(
      <div className="alert-container">
        <h2>{this.state.title}</h2>
        <div>
          {this.props.message}
        </div>
        <Button framework="Angular"> I <Heart/> React</Button>
        <button onClick={() => this.setState({title: "Baboon React"})}>Change Title</button>
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