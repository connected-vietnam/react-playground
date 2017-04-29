/* eslint-disable global-require */

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../src/components/Icon/stories')
  // require as many as stories you need.
}

configure(loadStories, module)
