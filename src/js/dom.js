class Component {
    constructor(props) {
        
    }
}

export const MunkeyReact = (function MunkeyReact () {

    var publicAPI = {}

    console.log("what is Component: ", Component)
    return publicAPI = {
        createElement,
        render,
        Component
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
        diff (vdom, container, oldDom)
    };

    // Takes in vdom <<<<<<<< --- target dom
    // Takes in container <<< --- where the vdom will be mounted
    // Takes in oldDom <<<<<< --- oldDom to be compared against
    function diff (vdom, container, oldDom) {
        let oldVDom = oldDom && oldDom._virtualElement;

        // If there is no oldDom, mount the vdom.
        if (!oldDom) {
            mountElement(vdom, container, oldDom);
        }
        // If there is a oldDom:
        // Check if the type of the vdom we're trying to mount is a functional component.
        // Run diffComponent function.
        else if (typeof vdom.type === "function"){
            diffComponent(vdom, null, container, oldDom);
        }
        // If it's not a functional component, and the old and target dom have the same type
        else if (oldVDom && oldVDom.type === vdom.type) {
            // If the oldVDom's type is text
            // Update the node's text with the target node's text.
            if (oldVDom.type === "text") {
                updateTextNode(oldDom, vdom, oldVDom);
            }
            // If it's NOT text.
            // Run updateDomElement.
            else {
                updateDomElement(oldDom, vdom, oldVDom);
            }

            oldDom.virtualElement = vdom;

            // Do it for every child
            vdom.children.forEach(function diffChildren(child, i) {
                diff(child, oldDom, oldDom.childNodes[i]);
            });

            // Remove old dom nodes
            let oldNodes = oldDom.childNodes;
            if(oldNodes.length > vdom.children.length) {
                for (let i = oldNodes.length - 1; i >= vdom.children.length; i -= 1) {
                    let nodeToBeRemoved = oldNodes[i];
                    unmountNode(nodeToBeRemoved, oldDom);
                }
            }
        }
    }

    function unmountNode (domElement, parentComponent) {
        domElement.remove();
    }

    function diffComponent(newVirtualElement, oldComponent, container, domElement){
        if (!oldComponent) {
            mountElement(newVirtualElement, container, domElement);
        }
    }

    // Updates a TextNode's content.
    // Takes the domElement, a target new virtual element and the old virtual element.
    // If the new virtual element's textContent is not the same as the old one:
    // --- > update the domElement's textContent to be newVirtualElement.props.textContent
    function updateTextNode(domElement, newVirtualElement, oldVirtualElement) {
        if (newVirtualElement.props.textContent !== oldVirtualElement.props.textContent) {
            domElement.textContent = newVirtualElement.props.textContent;
        }
        domElement.virtualElement = newVirtualElement;
    }

    // Will be responsible for returning a 'Simple' Node, or a functional component.
    function mountElement(vdom, container, oldDom) {
        if (isFunction(vdom)) {
            return mountComponent(vdom, container, oldDom);
        } else {
            return mountSimpleNode(vdom, container, oldDom);
        }
    };

    function buildFunctionalComponent(vnode, context) {
        return vnode.type((vnode.props || {}));
    }

    function mountComponent(vdom, container, oldDomElement) {
        var nextvDom, container, newDomElement = null;
        
        if (isFunctionalComponent(vdom)) {
            console.log(nextvDom)
            nextvDom = buildFunctionalComponent(vdom);
        }
        else {
            nextvDom = buildStatefulComponent(vdom);
        }
        if (isFunction(nextvDom)) {
            return mountComponent(nextvDom, container, oldDomElement);
        }
        else {
            newDomElement = mountElement(nextvDom, container, oldDomElement);
        }
        return newDomElement
    }

    function buildStatefulComponent(virtualElement) {
        const component = new virtualElement.type();
        const nextElement = component.render();
        // Set a reference to be used in comparison
        nextElement.component = component;
        return nextElement;
    }

    // Takes in a node, checks if the type is a function.
    function isFunction(obj) {
        return obj && 'function' === typeof obj.type;
    }

    // Takes in a node, checks if the type is a function.
    // Also checks if the function has a proto-link to a render method/
    // If so, then it is a Stateful component.
    // If not, then it is a functional component.
    function isFunctionalComponent(vnode) {
        let nodeType = vnode && vnode.type;
        return nodeType && 
            isFunction(vnode) &&
            !(nodeType.prototype && nodeType.prototype.render);

    }

    // Parameters: 
    // 1. vdom <<<<<<<<<<<<<<<< --- target dom
    // 2. container <<<<<<<<<<< --- node on which to mount, (The first is the <div id='root'></div>)
    // 3. oldDomElement <<<<<<< --- old dom

    function mountSimpleNode(vdom, container, oldDomElement, parentComponent) {
        // Create a new dom element
        let newDomElement = null;
        // does the oldDomElement have a sibling ?
        const nextSibling = oldDomElement && oldDomElement.nextSibling;

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
        // Store in it the vdom.
        newDomElement._virtualElement = vdom;

        // Remove old nodes
        if (oldDomElement) {
            unmountNode(oldDomElement, parentComponent);
        }

        // If the oldDomElement has a sibling
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
            const newProp = newProps[propName];
            const oldProp = oldProps[propName];
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