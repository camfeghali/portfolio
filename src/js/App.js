/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";

const root = document.getElementById("root")

export const App = () => {

    // const element = (
    //   <div>
    //   <h1 className="header">Hello Tiny React!</h1>
    //   <h2>(coding nirvana)</h2>
    //   <div>nested 1<div>nested 1.1</div></div>
    //   <h3>(OBSERVE: This will change)</h3>
    //   {2 == 1 && <div>Render this if 2==1</div>}
    //   {2 == 2 && <div>{2}</div>}
    //   <span>This is a text</span>
    //   <button onClick={() => alert("Hi!")}>Click me!</button>
    //   <h3>This will be deleted</h3>
    //   2,3
    // </div>
    // )

    // MunkeyReact.render(element, root);
    
    var elementTwo = (
      <div>
        <h1 className="header">Hello Tiny React!</h1>
        <h2>(coding nirvana)</h2>
        <div>nested 1<div>nested 1.1</div></div>
        <h3 style="background-color:yellow">(OBSERVE: I said it!!)</h3>
        {2 == 1 && <div>Render this if 2==1</div>}
        {2 == 2 && <div>{2}</div>}
        <span>Something goes here...</span>
        <button onClick={() => alert("This has changed!")}>Click me!</button>
      </div>
    );

    // MunkeyReact.render(element, root);

      // setTimeout(() => {
      //   alert("Re-rendering...");
      //   MunkeyReact.render(elementTwo, root);
      // }, 4000)

    // const Heart = () => <span>&hearts;</span>

    // function Heart() {
    //   return (
    //     <span>&hearts;</span>
    //   )
    // }

    let element = (
      <div>
        <span>&hearts;</span>
    </div>
    )

    // let heartElement = Heart()

    MunkeyReact.render(element, root);
}

