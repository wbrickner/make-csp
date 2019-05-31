//
//  make-csp
//
//  Created by Will Brickner
//

const URL = require("url-parse")

function extractHost(url = "") {
    const { origin } = new URL(url + "")
    
    if (origin === null || origin === "null") { return url }
    return origin
}

function uniqueHosts(hostArray = []) {
    const unique = { }
    let duplicateCount = 0
    for (var j = 0, jlen = hostArray.length; j < jlen; j++) {
        let host = extractHost(hostArray[j])
        if (unique[host]) { duplicateCount++ }
        unique[host] = true
    }

    const uniqueArr = new Array(jlen - duplicateCount)
    var j = 0
    for (var host in unique) {
        uniqueArr[j] = host
        j++
    }

    return uniqueArr
}

module.exports = function makeCSP(options = {}) {
    let csp = "default-src 'none'; "

    if (options.scripts && options.scripts.length) { csp += `script-src ${uniqueHosts(options.scripts).join(" ")}; ` }
    if (options.styles && options.styles.length) { csp += `style-src ${uniqueHosts(options.styles).join(" ")}; ` }
    if (options.images && options.images.length) { csp += `img-src ${uniqueHosts(options.images).join(" ")}; ` }
    if (options.connections && options.connections.length) { csp += `connect-src ${uniqueHosts(options.connections).join(" ")}; ` }

    return csp
}