#!/usr/bin/env node

"use strict";

console.log(process.argv.slice(2))

printHelp();

/******** */

function printHelp() {
    console.log("ex1 usage:")
    console.log("    ex1.js --help")
    console.log("")
    console.log("--help      print this help")
    console.log("")
}