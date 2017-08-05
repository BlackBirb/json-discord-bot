const self = new Object({src: {}})
const main = require("./main.json")
for(const part in main.src) self.src[part] = require(`./${main.src[part]}`)
eval(main.init)

/*
self.cmdHandler.isCommand = msg => {
    if(!msg.content.startsWith(self.config.prefix)) return [false];
    if(msg.author.bot) return [false, null];
    let args = msg.content.slice(self.config.prefix.length).split(' ');
    return [true, args[0], args.slice(1)];
}*/