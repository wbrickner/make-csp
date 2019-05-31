# make-csp

Simple library for dynamically constructing a `Content-Security-Policy` at runtime.

### Installation

```shell
$ npm i -S make-csp
```

### Usage

```javascript
const makeCSP = require("make-csp")

const csp = makeCSP({
  scripts: [ 
    "https://abc.io/script.js", 
    "https://xyz.com/library.js" 
  ],
  styles: [ "https://hey.net/style.css" ],
  connections: [ "http://io.io/real-time" ]
})

// result:
// default-src 'none'; script-src https://abc.io https://xyz.com; style-src https://hey.net; connect-src http://io.io; 
```

# Brief Documentation

This module accepts an options object, with several recognized properties:

- scripts
- styles
- images
- connections

Each is expected to be an array of URLs.

Duplicate hosts are handled, and are not duplicated in the CSP.

# License [ MIT ]

```text
Copyright (c) 2019 Will Brickner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```