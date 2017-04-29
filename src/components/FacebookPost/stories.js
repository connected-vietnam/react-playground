// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FacebookPost from './'
import post from './sample-data/post'

storiesOf('FacebookPost', module)
  .add('default', () => (
    <div style={{ width: '400px' }}>
      <FacebookPost post={post} />
    </div>
  ))
