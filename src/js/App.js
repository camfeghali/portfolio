/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";
import mexicoCamille from "../img/mexico-camille.png";
import { SocialLinks, FavoriteTech, Heading } from './SocialLinks.js'
import Accordion from './Accordion.js'
import { AccordionElement } from './Accordion.js'
import { lsaDescription } from './ProjectsDescriptions.js'

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
          <Content file="App.js"/>
        </div>
        <div></div>
      </div>
    );
  }
}


function Content (props) {
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
      <Heading title="Professional Projects"/>
      <Accordion>
        <AccordionElement label="Load Shedding Agent 2.0" content={lsaDescription}/>
        <AccordionElement label="Rona" content={lsaDescription}/>
        <AccordionElement label="Agritect Designer" content={lsaDescription}/>
        <AccordionElement label="Cancercare.org" content={lsaDescription}/>
      </Accordion>
      <Heading title="Personal Projects"/>
      <Accordion>
        <AccordionElement label="ReactJS Clone" content={lsaDescription}/>
        <AccordionElement label="Synced" content={lsaDescription}/>
        <AccordionElement label="KetoMe" content={lsaDescription}/>
        <AccordionElement label="Caravan" content={lsaDescription}/>
      </Accordion>
      <Heading title="Blog Posts"/>
      <Accordion>
        <AccordionElement label="JavaScript, my favorite compiled language" content={lsaDescription}/>
        <AccordionElement label="How Closures lead to Modules in JavaScript" content={lsaDescription}/>
        <AccordionElement label="Object Oriented Programming and the Prototype Chain in JavaScript." content={lsaDescription}/>
        <AccordionElement label="JavasScript Promises and the Micro Task Queue." content={lsaDescription}/>
        <AccordionElement label="Asynchronous JavaScript Explained" content={lsaDescription}/>
        <AccordionElement label="Step by Step guide to set up a basic full-stack app with Rails and Vanilla Javascript." content={lsaDescription}/>
        <AccordionElement label="Dynamic method definition with ruby’s .define_method" content={lsaDescription}/>
      </Accordion>
    </div>
  );
}