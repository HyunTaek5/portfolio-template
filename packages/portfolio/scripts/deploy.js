const TOKEN = process.argv[2] || null

const ghpages = require('gh-pages')
const profile = require('../config/profile.json')

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: TOKEN
      ? `https://${profile.github}:${TOKEN}@github.com/유저이름/레포명.git`
      : 'https://github.com/유저이름/레포명.git'
  },
  function (err) {
    console.log(err)
  }
)
