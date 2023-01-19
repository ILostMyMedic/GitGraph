const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')

const FILE_PATH = './data.json'

let date;

const GitStreak = (n) => {
    if(n === 0) return simpleGit().push('origin', 'main')

    // if date is undefined, set it to a random date in the past year. if pressent, add a day to it.
    date = date ? moment(date).add(1, 'd').format() : moment().subtract(1, 'y').add(1, 'd').format()

    const data = { date }

    
    jsonfile.writeFile(FILE_PATH, data, () => {
        console.log(`Committing ${date}...`)
        simpleGit().add([FILE_PATH]).commit(date, { '--date': date },
        GitStreak.bind(this, --n))
    })

}

GitStreak(30)