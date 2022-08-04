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

// base url for repo is origin 
const baseUrl = 'https://github.com/ILostMyMedic/GitGraph.git'

// create a new branch called "hotfix"
git.checkoutLocalBranch('hotfix');

// add changes to "hotfix" branch
git.add('./*');

// commit changes to "hotfix" branch
git.commit('hotfix');

// push changes to "hotfix" branch
git.push(baseUrl, 'hotfix');

// create a pull request to merge "hotfix" branch to "main" branch
git.pull(baseUrl, 'main');

