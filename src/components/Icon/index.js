// @flow

import React from 'react'
import cx from 'classnames'

const Icon = ({ name }: { name: string }) => (
  <i className={cx('fa', name)} aria-hidden="true" />
)

export default Icon
