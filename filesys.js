const path = require("path");
const fs = require("fs");

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);
processFile(path.resolve('hello.txt'))

function processFile(filepath) {
    const contents = fs.readFileSync(path.join(BASE_PATH, filepath));
    console.log(contents);
}