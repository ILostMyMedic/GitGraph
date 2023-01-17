const fs = require('fs');
const file = require('./data.json');
const simpleGit = require('simple-git');
const git = simpleGit.default();
const { Octokit } = require("@octokit/core");


const GitGraph = async () => {
    try {
        // onfiguration for octokit
        const octokit = new Octokit({
            auth: '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',
        });
        const {
            data: { login },
        } = await octokit.request('GET /user');
        console.log("Hello, %s", login);
        
        
        
        // use fs to write a random 64 character string to a file.json 
        // this will be used as the commit message
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        fs.writeFileSync('./data.json', JSON.stringify({ randomString }));
        
        // push change to hotfix branch
        await git.add('./*');
        await git.commit(randomString);
        await git.push('origin', 'hotfix');

        // create a pull request from hotfix to main
        const { data } = await octokit.pulls.create({
            owner: 'ILostMyMedic',
            repo: 'GitGraph',
            title: randomString,
            head: 'hotfix',
            base: 'main',
        });

        // merge pull request
        await octokit.pulls.merge({
            owner: 'ILostMyMedic',
            repo: 'GitGraph',
            pull_number: data.number,
        });

    } catch (e) {
        console.log(e);
    }
}

GitGraph();