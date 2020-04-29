/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";
import munkeyLogo from "../img/munkey-logo.png";

const root = document.getElementById("root");

export const App = () => {

  let greetingMessage = "Welcome to MunkeyReact, a ReactJS clone"

  MunkeyReact.render(<AncestorComponent greetingMessage={greetingMessage}/>, root)
};

class AncestorComponent extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }


  render() {
    return(
      <div>
        <h2>{this.props.greetingMessage}</h2>
        <MunkeyLogo/>
      </div>
    );
  }
}

function MunkeyLogo (props) {
  const style = {color: 'red'}
  return(
    <div>
      <h2 style="color:blue"> Can i style with props ?</h2>
      <h2 className="test"> Can i style with props ?</h2>
      <h2 style={style}> Can i style with props ?</h2>
      <img src={munkeyLogo}></img>
    </div>
  );
}