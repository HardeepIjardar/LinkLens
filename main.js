import validator from 'validator';
import chalk from 'chalk';
import fs from 'fs';
import url from 'url';

let u = process.argv[2];
if(u == undefined) {
    console.log(chalk.red('Please Enter a URL.'));
}

function isBlock(x) {
    let bURLs = fs.readFileSync('./BlockedURL.txt', 'utf-8').split('\n')
    // console.log(bURLs);
    return bURLs.some((i) => i.trim() == x);
}

if (validator.isURL(u)) {
    if(!isBlock(u)){
        // console.log(chalk.greenBright(u));
        url.parse(u, true);
        // console.log(chalk.greenBright(uri.protocol));
        fs.appendFileSync('./url.txt', `${u}\n`);
        console.log(chalk.greenBright("URL is valid"));
    }
    else{
        console.log(chalk.blackBright.bgRedBright(" Blocked URL "))
    }
}
else{
    console.log(chalk.redBright(`${u} is not a valid URL.`));
}