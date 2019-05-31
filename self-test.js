const self = require(".")

console.log(
    self({
        scripts: [ "https://google.com/fakescript.js", "https://twitter.com/some/bootstrap/junk.js" ],
        styles: [ "https://facebook.com/react.css", "https://amazon.com/some/bootstrap/junk.css" ],
        connections: [ "http://netflix.com/steal-my-data-please/" ]
    })
)