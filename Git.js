const fs = require('fs');
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

        console.log(`${randomString} pushed to hotfix branch`)
        

    } catch (e) {
        console.log(e);
    }
}

GitGraph();