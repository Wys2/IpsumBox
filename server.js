// Setup our requirements
const console = require('better-console');
const { AutoComplete, Select, Scale, NumberPrompt, Confirm } = require('enquirer');
const fs = require("fs")
const fastLoremIpsum = require('fast-lorem-ipsum');
const pkg = require(`${__dirname}/package.json`)
let lang = require("./lang/en.json")

// Print SplashScreen
var data = fs.readFileSync('splash.txt', 'utf8');
console.clear()
console.log(`\n${data}`)
console.log(`      v${pkg.version} by ${pkg.author}\n\n`)

// Ask for lang
const lang_choice = new Select({
    name: 'lang',
    message: 'Select Lang',
    choices: ['en', 'fr']
});

// Save to file function
async function saveToFile(input){
    console.info(l.results.sucess_stf)
}

// Define function
async function eval_fn(answer){
    if(answer == l.general.titles.txt_gen){

        new NumberPrompt({
            name: 'txt_gen_n',
            message: l.txt_gen.amt
        }).run().then(num => {
            new Confirm({
                name: 'savetofile',
                message: l.general.titles.stf
              }).run().then(result => {
                rs = fastLoremIpsum(`${num}w`)
                if(result){
                    saveToFile(rs)
                } else console.log(rs)
              })
        })

    } else if(answer == l.general.titles.img_gen){

    } else if(answer == l.general.titles.entry_gen){

    } else console.error("Unhandled functionnality")
}

// Run the prompt
lang_choice.run()
    .then(answer => {
        l = require(`./lang/${answer}.json`)
        new Select({
            name: 'menu',
            message: l.general.titles.fn_choose,
            choices: [l.general.titles.txt_gen, l.general.titles.img_gen, l.general.titles.entry_gen]
        }).run().then(answer => eval_fn(answer))
    })