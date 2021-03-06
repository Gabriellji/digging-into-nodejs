#!/usr/bin/env node

"use strict";
const util = require("util");
const path = require("path");
const fs = require("fs");

console.log(__dirname, 'dfgerg');

const getStdin = require("get-stdin");

const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: ["file"],
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

if (process.env.HELLO) {
  console.log(process.env.HELLO);
}

if (args.help) {
  printHelp();
} else if (args.in || args._.includes("-")) {
  getStdin().then(processFile).catch(error);
} else if (args.file) {
  fs.readFile(path.join(BASE_PATH, args.file), (err, contents) => {
    if (err) {
      error(err.toString());
    } else {
      processFile(contents.toString());
    }
  });
} else {
  error("Incorrect usage.", true);
}

function error(msg, includeHelp = false) {
  console.error(msg);
  if (includeHelp) {
    console.log("");
    printHelp();
  }
}

/*****************************/

function processFile(contents) {
  contents = contents.toUpperCase();
  process.stdout.write(contents);
}

function printHelp() {
  console.log("ex1 usage:");
  console.log("  ex1.js --help");
  console.log("");
  console.log("--help                print this help");
  console.log("--file={FILENAME}      process the file");
  console.log("--in, -               process stdin");
  console.log("");
}
