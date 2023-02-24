// Setup our requirements
const console = require('better-console');
const { ADDRGETNETWORKPARAMS } = require('dns');
const { AutoComplete, Select, Scale } = require('enquirer');
const fs = require("fs")
const pkg = require(`${__dirname}/package.json`)
let lang = require("./lang/en.json")

// Print SplashScreen
var data = fs.readFileSync('splash.txt', 'utf8');
console.clear()
console.info(`\n${data}`)
console.info(`      v${pkg.version} by ${pkg.author}\n\n`)

// Ask for lang
const lang_choice = new Select({
    name: 'lang',
    message: 'Select Lang',
    choices: ['en', 'fr']
});

// Run the prompt
lang_choice.run()
    .then(answer => {
        l = require(`./lang/${answer}.json`)
        new Select({
            name: 'menu',
            message: l.titles.choices.fn_choose,
            choices: [l.titles.choices.txt_gen, l.titles.choices.img_gen, l.titles.choices.entry_gen]
        }).run()
    })