#!/usr/bin/env node

"use strict";

const args = require("minimist")(process.argv.slice(2), {
    boolean: [ "help" ],
    string: [ "file" ]
})

if(args.help) {
    printHelp();
} else if (args.file) {
    console.log(args.file)
} else {
    error("incorrect usage.", true)
}


console.log(args)

function error(msg, includeHelp = false) {
    console.error(msg);
    if(includeHelp) {
        console.log("")
        printHelp()
    }
}

/******** */

function printHelp() {
    console.log("ex1 usage:")
    console.log("   ex1.js --help")
    console.log("")
    console.log("--help                print this help")
    console.log("--file={FILENAME}      process the file")
    console.log("")
}
