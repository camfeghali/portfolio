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
    // ******************************************************
    // ******************************************************

    function render(vdom, container, oldDom = container.firstChild) {
        if (!oldDom) {
            mountElement(vdom, container, oldDom);
        };
    };

    function mountElement(vdom, container, oldDom) {
        return mountSimpleNode(vdom, container, oldDom);
    };

    function mountSimpleNode(vdom, container, oldDomElement, parentComponent) {
        let newDomElement = null;
        const nextSibling = oldDomElement && oldDomElement.nextSibling;

        if (vdom.type === "text") {
            newDomElement = document.createTextNode(vdom.props.textContent);
        }
        else {
            newDomElement = document.createElement(vdom.type);
        };

        newDomElement._virtualElement = vdom;

        if (nextSibling) {
            container.insertBefore(newDomElement, nextSibling);
        }
        else {
            container.appendChild(newDomElement);
        };

        vdom.children.forEach(function mountChildElement(child) {
            mountElement(child, newDomElement);
        });
    };



}())