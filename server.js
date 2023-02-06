// Setup our requirements
require("better-console")
const Prompt = require('prompt-choices');
const fs = require("fs")
const pkg = require(`${__dirname}/package.json`)

// Print SplashScreen
fs.readFile(`${__dirname}/splash.txt`, 'utf8', async function(err, data){
    console.clear()
    console.info(`\n${data}`)
    console.info(`      v${pkg.version} by ${pkg.author}`)
});

// Ask for choice