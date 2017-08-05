const self = new Object({src: {}})
const main = require("./main.json")
for(const part in main.src) self.src[part] = require(`./${main.src[part]}`)
eval(main.init)