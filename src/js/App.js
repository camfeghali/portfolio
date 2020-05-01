/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";
import mexicoCamille from "../img/mexico-camille.png";
import { SocialLinks, FavoriteTech, Heading } from './SocialLinks.js'
import Accordion from './Accordion.js'

const root = document.getElementById("root");

export const App = () => {

  let greetingMessage = "Welcome to MunkeyReact, a ReactJS clone"

  MunkeyReact.render(<AncestorComponent greetingMessage={greetingMessage}/>, root)
};

class AncestorComponent extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello World"
    }
  }


  render() {
    return(
      <div className="ancestor-wrapper">
        <div></div>
        <div className="content-wrapper">
          <MunkeyLogo file="App.js"/>
        </div>
        <div></div>
      </div>
    );
  }
}

function MunkeyLogo (props) {
  return(
    <div className="content-column">
      <h2>Thanks for checking out my profile!</h2>
      <img src={mexicoCamille} className="munkey-logo"></img>
      <SocialLinks />
      <h2 style="color:rgba(60,164,157,1)"> Software Engineer @ <a className="honeyco-link">HoneyCO</a> </h2>
      <h2 className="css-style">This page is built with a <a className="munkey-react-link">ReactJS clone</a> I made.</h2>
      <hr/>
      <FavoriteTech />
      <hr/>
      <Heading />
      <Accordion>
        <div label='Alligator Mississippiensis'>
          <p>
            <strong>Common Name:</strong> American Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Texas to North Carolina, US
          </p>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </div>
        <div label='Alligator Sinensis'>
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div>
      </Accordion>
    </div>
  );
}