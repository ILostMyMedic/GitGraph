/**
 * Create a function that wil return a random 64 bit string to ./data.json
 * use simple-git to push new changes to "hotfix" branch in origin repo.
 * 
 * create a pull request to merge "hotfix" branch to "main" branch
*/

const simpleGit = require('simple-git');
const git = simpleGit();
const fs = require('fs');
const path = require('path');

const randomString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const data = {
    "randomString": randomString()
}

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));

git.add('./*')
    .commit('random string added')
    .push('origin', 'hotfix', () => {
        console.log('pushed to hotfix branch');
    });

git.pull('origin', 'main', () => {
    console.log('pulled from main branch');
});

git.checkout('main', () => {
    console.log('checked out to main branch');
});

git.mergeFromTo('hotfix', 'main', () => {
    console.log('merged hotfix branch to main branch');
});

git.push('origin', 'main', () => {
    console.log('pushed to main branch');
});

git.checkout('hotfix', () => {
    console.log('checked out to hotfix branch');
});
