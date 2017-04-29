/* eslint-disable no-console */

const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, 'storybook-static'), (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Success!')
})
