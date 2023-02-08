// Setup our requirements
const console = require('better-console');
const { ADDRGETNETWORKPARAMS } = require('dns');
const { AutoComplete, Select, Scale } = require('enquirer');
const fs = require("fs")
const pkg = require(`${__dirname}/package.json`)
let lang = "English"

// Print SplashScreen
var data = fs.readFileSync('splash.txt', 'utf8');
console.clear()
console.info(`\n${data}`)
console.info(`      v${pkg.version} by ${pkg.author}\n\n`)

// Ask for lang
const lang_choice = new Select({
    name: 'lang',
    message: 'Choose a language',
    choices: ['English', 'French']
});

// Run the prompt
lang_choice.run()
    .then(answer => {
        lang = answer
    })
    .catch(console.error);

// Ask for function
const menu_choice = new Select({
    name: 'menu',
    message: 'Choisissez une fonction',
    choices: ["Générateur d'images", "Générateur de texte", "Générateur d'entrées"]
})