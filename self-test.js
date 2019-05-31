const self = require(".")

console.log(
    self({
        scripts: [
            "https://abc.io/script.js",
            "https://xyz.com/library.js"
        ],
        styles: ["https://hey.net/style.css"],
        connections: ["http://io.io/real-time"]
    })
)