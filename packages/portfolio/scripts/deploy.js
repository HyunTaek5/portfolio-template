const TOKEN = process.argv[2] || null

const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: TOKEN
      ? `https://HyunTaek5:${TOKEN}@github.com/HyunTaek5/justsloth.git`
      : 'https://github.com/HyunTaek5/justsloth.git'
  },
  function (err) {
    console.log(err)
  }
)
