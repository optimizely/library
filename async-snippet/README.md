## Async Snippet Installation 
The scripts below illustrate a simple flicker management mechanism for asynchronous installs of Optimizely X Web. The mechanism works by masking certain elements until all syncronous Optimizely variation code has been executed, preventing the "flicker" of original content as the page is loading.

### Option 1. Masking the entire `<body>`
> _no configuration necessary_

This variation will set `opacity:0` to the <body> prior to any elements becoming visible. Once Optimizely syncronous changes have been applied, that body will be unhidden.

#### Approach
* Within the `<head>`, add CSSRule to dynamic CSSStyleSheet that says body `{opacity: 0}`
* Wait until Optimizely synchronous changes have been applied (`lifecycle.activated`)
* Disable dynamic CSSStyleSheet, unhiding body.

---

### Option 2. Masking individual elements
> _configuration required_

This variation will set `opacity:0` to the individual elements that are being manipulated as part of the variation treatment. Once Optimizely syncronous changes have been applied, the hidden elements will reappear. 

#### Approach
* Supply an Array of element selectors to become hidden
* For each selector supplied, add CSSRule to dynamic CSSStyleSheet that says SELECTOR `{opacity: 0}`
* Wait until Optimizely synchronous changes have been applied (`lifecycle.activated`)
* Disable dynamic CSSStyleSheet, unhiding body.
