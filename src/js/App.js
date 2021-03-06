/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";
import mexicoCamille from "../img/mexico-camille.png";
import { NavBar, SocialLinks, FavoriteTech, Heading, BlogPost, Footer } from './FunctionalComps.js'
import Accordion from './Accordion.js'
import { AccordionElement } from './Accordion.js'
import {
  lsaDescription,
  munkeyReactDescription,
  ronaDescription,
  agritectureDesignerDescription,
  cancercareDescription,
  syncedDescription,
  ketoMeDescription,
  nodeBoilerplateDescription,
  caravanDescription,
  RARECastDescription
} from './ProjectsDescriptions.js'

const root = document.getElementById("root");

export const App = () => {

  let greetingMessage = "Welcome to MunkeyReact, a ReactJS clone"

  MunkeyReact.render(<AncestorComponent greetingMessage={greetingMessage} />, root)
};

class AncestorComponent extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello World"
    }
    this.handleOnScroll = this.handleOnScroll.bind(this)
  }

  handleOnScroll() {
    console.log("Helooo")
  }

  render() {
    return (
      <div className="ancestor-wrapper">
        <div></div>
        <div className="content-wrapper">
          <Content onClick={this.handleOnScroll} file="App.js" />
        </div>
        <div></div>
      </div>
    );
  }
}


function Content(props) {
  return (
    <div id="about" className="content-column">
      <NavBar />
      <h2 style="margin-bottom: 2em; color:rgba(60,160,255,1);">Thanks for checking out my website!!</h2>
      <img src={mexicoCamille} className="munkey-logo"></img>
      <SocialLinks />
      <h2 style="color:rgba(60,164,157,1)"> Software Engineer </h2>
      <h2 className="css-style">This page is built with a <a className="munkey-react-link">ReactJS clone</a> I made</h2>
      <hr />
      <FavoriteTech />
      <hr />
      <Heading id="professional-projects" title="Professional Projects" />
      <Accordion>
        <AccordionElement label="RARECast" content={RARECastDescription} />
        <AccordionElement label="Load Shedding Agent 2.0" content={lsaDescription} />
        <AccordionElement label="Rona" content={ronaDescription} />
        <AccordionElement label="Agritect Designer" content={agritectureDesignerDescription} />
        <AccordionElement label="Cancercare.org" content={cancercareDescription} />
      </Accordion>
      <Heading id="personal-projects" title="Personal Projects" />
      <Accordion>
        <AccordionElement label="MunkeyReact, a ReactJS Clone" content={munkeyReactDescription} />
        <AccordionElement label="Synced" content={syncedDescription} />
        <AccordionElement label="KetoMe" content={ketoMeDescription} />
        <AccordionElement label="Caravan" content={caravanDescription} />
        <AccordionElement label="NodeJS | Babel | Webpack | Express boilerplate" content={nodeBoilerplateDescription} />
      </Accordion>
      <Heading id="blog" title="Blog Posts" />
      <BlogPost title="JavaScript, my favorite compiled language" link="https://medium.com/javascript-in-plain-english/javascript-my-favorite-compiled-language-a-blog-about-scope-2012071aac86" />
      <BlogPost title="How Closures lead to Modules in JavaScript" link="https://medium.com/javascript-in-plain-english/javascript-from-closure-to-modules-21d1ba30ab36?source=your_stories_page---------------------------" />
      <BlogPost title="Object Oriented Programming and the Prototype Chain in JavaScript." link="https://medium.com/javascript-in-plain-english/object-oriented-programming-and-the-prototype-chain-in-javascript-d71032a30324?source=your_stories_page---------------------------" />
      <BlogPost title="JavasScript Promises and the Micro Task Queue." link="https://medium.com/javascript-in-plain-english/javasscript-promises-and-the-micro-task-queue-6111f7452f05" />
      <BlogPost title="Asynchronous JavaScript Explained" link="https://medium.com/javascript-in-plain-english/asynchronous-javascript-explained-a4c1133f5544" />
      <BlogPost title="Step by Step guide to set up a basic full-stack app with Rails and Vanilla Javascript." link="https://medium.com/@camfeg/step-by-step-guide-to-set-up-a-basic-full-stack-app-with-rails-and-vanilla-javascript-12ae33ff0c64" />
      <BlogPost title="Dynamic method definition with ruby’s .define_method" link="https://medium.com/@camfeg/dynamic-method-definition-with-rubys-define-method-b3ffbbee8197?source=your_stories_page---------------------------" />
      <Footer />
    </div>
  );
}
