import validator from 'validator';
import chalk from 'chalk';
import fs from 'fs';
import { URL } from 'url';

let u = process.argv[2];
if (u == undefined) {
    console.log(chalk.red('Please Enter a URL.'));
    process.exit(1);
}
function isBlock(x) {
    let bURLs = fs.readFileSync('./BlockedURL.txt', 'utf-8').split('\n');
    return bURLs.some((i) => i.trim() === x);
}
const predefinedParams = {
    name: "Hardeep Ijardar",
    age:  "16",
    role: "Web-Developer"
};

if (validator.isURL(u)) {
    if (!isBlock(u)) {
        try {
            const parsedUrl = new URL(u);
            for (const [key, value] of Object.entries(predefinedParams)) {
                parsedUrl.searchParams.set(key, value);
            }

            console.log(chalk.greenBright('URL is valid.'));
            console.log(chalk.blueBright('Final URL with parameters:'), parsedUrl.href);

            const searchParams = {};
            parsedUrl.searchParams.forEach((value, key) => {
                searchParams[key] = value;
            });

            console.log(chalk.blueBright('Search Parameters:'), searchParams);
            fs.appendFileSync('./url.txt', `${parsedUrl.href}\n`);
        } catch (error) {
            console.log(chalk.redBright('Error parsing the URL.'));
        }
    } else {
        console.log(chalk.blackBright.bgRedBright('Blocked URL'));
    }
} else {
    console.log(chalk.redBright(`${u} is not a valid URL.`));
}