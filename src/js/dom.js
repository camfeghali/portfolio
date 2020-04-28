export const MunkeyReact = (function MunkeyReact () {

    var publicAPI = {}

    return publicAPI = {
        createElement,
        render
    }


    // CreateElement is called for every element in a JSX expression
    // Ins:
    // One parent element is either an Object, a boolean, or text, if it's an Object is has a:
    // 1. type ---------- >>>>>>> html tag
    // 2. attributes ---- >>>>>>> Object where keys hold html tag attribute vlues (className, alt, etc)
    // 3. ...children --- >>>>>>> Array of elements [childElement1, childElement2, childElement3, ...]
    // Behavior:
    // 1. Create childElements = []
    // 2. Append to it the children's array passed in as an argument.
    // 3. Map over it,
    //    if the child is an Object, add it to the children's array
    //    else call createElement again with a 
    //    type = "text" and attributes = { textContent: child }
    // 4. return an Object { type, children: childElement, props: {children: childElements}, attributes }

    function createElement(type, attributes, ...children) {

        const childElements = [].concat(...children).reduce(
            (acc, child) => {
                if (child !== null && child !== true && child !== false){
                    if(child instanceof Object) {
                        acc.push(child)
                    }
                    else {
                        acc.push(createElement(
                            "text", {
                                textContent: child
                            }
                        ))
                    }
                }
                return acc
            }, [])

        return {
            type,
            children: childElements,
            props: Object.assign({ children: childElements }, attributes)
        }
    }

    // ******************************************************
    // ****************** render function *******************
    // ******************************************************

    // The render function will be responsible for diffing the old and target doms
    // And apply changes accordingly
    // It will take three parameters: 
    // 1. vdom <<<<<<< --------- target dom
    // 2. container << --------- node on which to mount, (The first is the <div id='root'></div>)
    // 3. oldDom <<<<< --------- old dom which defaults to the container's first child, which is the structure to compare against
    function render(vdom, container, oldDom = container.firstChild) {
        if (!oldDom) {
            mountElement(vdom, container, oldDom);
        };
    };

    // Will be responsible for returning a 'Simple' Node, or a functional component.
    function mountElement(vdom, container, oldDom) {
        return mountSimpleNode(vdom, container, oldDom);
    };

    // Parameters: 
    // 1. vdom <<<<<<<<<<<<<<<< --- target dom
    // 2. container <<<<<<<<<<< --- node on which to mount, (The first is the <div id='root'></div>)
    // 3. oldDomElement <<<<<<< --- old dom

    function mountSimpleNode(vdom, container, oldDom, parentComponent) {
        // Create a new dom element
        let newDomElement = null;
        // does the oldDom have a sibling ?
        const nextSibling = oldDom && oldDom.nextSibling;

        // if target dom type is "text"
        // Create a text node, with the value stored in the dom.props.textContent, which is plain text
        // Otherwise, create an element with the type found in vdom.type
        if (vdom.type === "text") {
            newDomElement = document.createTextNode(vdom.props.textContent);
        }
        else {
            newDomElement = document.createElement(vdom.type);
            updateDomElement(newDomElement, vdom);
        };

        // On that new dom element, add key _virtualElement
        // Store in it the vdom
        newDomElement._virtualElement = vdom;

        // If the oldDom has a sibling
        // Insert the newly created domElement before it

        if (nextSibling) {
            container.insertBefore(newDomElement, nextSibling);
        }
        // Otherwise, append the newDomElement to the container
        else {
            container.appendChild(newDomElement);
        };
        // Call mountElement for each child node of the 
        // vdom to go through all the child elements
        vdom.children.forEach(function mountChildElement(child) {
            mountElement(child, newDomElement);
        });
    };

    // This function will be responsible for managing the class and attributes that are rendered
    // 
    function updateDomElement(domElement, newVirtualElement, oldVirtualElement = {}) {
        const newProps = newVirtualElement.props || {};
        const oldProps = oldVirtualElement.props || {};

        console.log("newVirtualElement: ", newVirtualElement);

        Object.keys(newProps).forEach(propName => {
            const newProp = newProps[propName];
            const oldProp = oldProps[propName];
            if(newProp !== oldProp) {
                // If prop is an event handler
                if(propName.slice(0, 2) === "on") {
                    const eventName = propName.toLowerCase().slice(2);
                    // add event listener to dom element
                    domElement.addEventListener(eventName, newProp, false);
                    // If old prop has event listener, remove it
                    if (oldProp) {
                        domElement.removeEventListener(eventName, oldProp, false);
                    }
                }
                // If the prop is value or checked, add it 
                else if (propName === "value" || propName === "checked") {
                    domElement[propName] = newProp;
                }
                else if (propName !== "children") {
                    if(propName === "className") {
                        domElement.setAttribute("class", newProps[propName]);
                    }
                    else {
                        domElement.setAttribute(propName, newProps[propName]);
                    }
                }
            }
        });
        Object.keys(oldProps).forEach(propName => {
            const newProp = newProps[propNAme];
            const oldProp = oldProps[propNAme];
            if(!newProp) {
                if (propName.slice(0,2) === "on") {
                    domElement.removeEventListener(propName, oldProp, false);
                }
                else if (propName !== "children") {
                    domElement.removeAttribute(propName);
                }
            }
        })
    }

}())