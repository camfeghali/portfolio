export const MunkeyReact = (function MunkeyReact () {

    var publicAPI = {}

    return publicAPI = {
        createElement
    }

    function createElement(type, attributes, ...children) {
        // TODO implement createElement functionality

        return {
            type,
            children,
            props: attributes
        }
    }

}())