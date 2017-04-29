// @flow

import React from 'react'
import cx from 'classnames'

const Icon = ({ name, className }: { name: string, className?: string }) => (
  <i className={cx('fa', name, className)} aria-hidden="true" />
)

Icon.defaultProps = {
  className: null,
}

export default Icon
