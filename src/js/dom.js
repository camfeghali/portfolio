export const MunkeyReact = (function MunkeyReact () {

    var publicAPI = {}

    return publicAPI = {
        logMessage,
        createElement
    }

    function createElement(arg1, arg2, arg3) {
        // TODO implement createElement functionality
        console.log(arg1, arg2, arg3)
        return 
    }


    function logMessage() {
        console.log("Hello World")
    }

})()