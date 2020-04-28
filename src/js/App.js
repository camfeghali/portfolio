/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";

const root = document.getElementById("root");

export const App = () => {
  MunkeyReact.render(<Greeting message="Willyboy"/>, root);
  
  setTimeout(() => {
    alert("Re-rendering...");
    MunkeyReact.render(<Greeting message="Abou l Mich"/>, root)
  }, 1000)

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
    </div>
  );
}