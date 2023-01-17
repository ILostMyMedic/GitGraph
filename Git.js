const simpleGit = require('simple-git');
const git = simpleGit.default();

const GitGraph = async () => {
    try {
        
        // create a new commit to hotfix branch
        await git.checkout('hotfix');
        await git.commit('hotfix commit', ['--allow-empty']);
        await git.push('origin', 'hotfix');

        // create a pull request from hotfix to main
        await git.checkout('main');
        await git.pull('origin', 'main');
        await git.mergeFromTo('hotfix', 'main');
        await git.push('origin', 'main');

        
        


    } catch (e) {
        console.log(e);
    }
}

GitGraph();