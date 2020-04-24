export default function App () {

    var publicAPI = {}

    return publicAPI = {
        logMessage: logMessage
    }

    function logMessage() {
        console.log("Hello World")
    }
}