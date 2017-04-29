// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from './'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon name="fa-heart-o" />
  ))
  .add('with overide classnames', () => (
    <Icon name="fa-heart-o" className="fa-2x" />
  ))
