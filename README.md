# What is this?

this plugin allows developers to see the current status of their specific extension. get notification when the status change and it will reload the extension  after a build

# Installation

1. Install the Auto Extension Reloader first
2. `npm i auto-extension-reloader --save-dev`
3. 
```
const AutoExtensionReloader = require('auto-extension-reloader')
...
module.exports = {
    ...
    plugins: [new AutoExtensionReloader({
        port: 8890,
        extensionId: 'igkbfpignjgfhmlialplgjbidahfcckk'
    })]
}
```

## Options

Auto Extension Reloader supports 2 options

* *extensionId* (required) - Extension Id of the developers extension
* *port* (optional) - Port for the Auto Extension Reloader extension to connect (Defaults to 8890)