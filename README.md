
# GitGraph
<img src="./assets/header.png" >

GitGraph is a prof of concept that shows why Github statistics are not reliable. It is a tool that allows you to commit back in time to `cheat` your Github statistics.


## How it works
It works by using the npm `simple-git` package to commit back in time to the specifid repo and branch you would like.

## How to use
1. Clone the repo
2. Setup a remote origin of the repo you would like to commit back in time to
   1. `git init`
   2. `git remote add origin <repo>`
3. Run `npm i`
4. Open either `Commit.js` or `Streak.js` and change the variable of either what streak you want, or how many commits.
5. run `node Commit.js` or `node Streak.js` to commit back in time.


## Why?
Github statistics are not reliable. They are not a good representation of your skill level. This is a proof of concept that shows that you can cheat your Github statistics. This is not a tool to be used to cheat your statistics, but to show that you can cheat your statistics.