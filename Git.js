const fs = require('fs');
const file = require('./data.json');
const simpleGit = require('simple-git');
const git = simpleGit.default();

const GitGraph = async () => {
    try {
        
        // use fs to write a random 64 character string to a file.json 
        // this will be used as the commit message
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        fs.writeFileSync('./data.json', JSON.stringify({ randomString }));
        
        // push change to hotfix branch
        await git.add('./*');
        await git.commit(randomString);
        await git.push('origin', 'hotfix');

        // merge hotfix branch into master
        await git.checkout('master');
        await git.mergeFromTo('hotfix', 'master');
        await git.push('origin', 'master');

    } catch (e) {
        console.log(e);
    }
}

GitGraph();