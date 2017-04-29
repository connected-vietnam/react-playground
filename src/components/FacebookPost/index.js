// @flow

import React from 'react'
import { withState } from 'recompose'
import enhanceWithClickOutside from 'react-click-outside'
import Icon from '../Icon'

class _PostTopMenu extends React.Component {
  props: {
    hide: () => void,
  };

  handleClickOutside() {
    this.props.hide()
  }

  render() {
    return (
      <div className="absolute top-100 right-0 w4 bg-white shadow-1 pa2">
        <div className="f7 black-80 pa2 pointer">Share</div>
        <div className="f7 black-80 pa2 pointer">Unfollow</div>
      </div>
    )
  }
}

const PostTopMenu = enhanceWithClickOutside(_PostTopMenu)

const PostHeader = ({
  post,
  isShowTopMenu,
  showTopMenu,
}: {
  post: TPost,
  isShowTopMenu: boolean,
  showTopMenu: (isShowTopMenu: boolean) => void,
}) => (
  <div className="flex">
    <div className="flex-auto flex">
      <img
        className="w3 h3"
        src={post.user.avatar}
        alt={post.user.name}
      />
      <div className="pa2">
        <div>
          <a
            className="link b f5"
            href={`/profile?id=${post.user.id}`}
          >
            {post.user.name}
          </a>
        </div>
        <div>{post.publishTime}</div>
      </div>
    </div>
    <div className="flex-none pa2">
      <Button className="relative pointer" icon="fa-angle-down" onClick={() => showTopMenu(!isShowTopMenu)} />
      {isShowTopMenu && (
        <PostTopMenu hide={() => showTopMenu(false)} />
      )}
    </div>
  </div>
)

const Button = ({ icon, children, onClick, className }: {
  icon?: string,
  children?: Element,
  onClick?: Function,
  className?: string
}) => (
  <a
    className={className}
    onClick={onClick}
  >
    {icon && (<Icon name={icon} />)}
    {children}
  </a>
)

Button.defaultProps = {
  icon: null,
  children: null,
  onClick: null,
  className: null,
}

const getIcon = (item: string) => ({
  like: 'fa-thumbs-up bg-blue',
  love: 'fa-heart bg-red',
  angry: 'fa-frown-o bg-orange',
}[item])

const FacebookPost = ({
  post,
  isShowTopMenu,
  showTopMenu,
}: {
  post: TPost,
  isShowTopMenu: boolean,
  showTopMenu: (isShowTopMenu: boolean) => void,
}) => {
  const engagements = Object.keys(post.engagement).filter(x => x !== 'total')
  return (
    <div className="shadow-2">
      <div className="pa1">
        <div className="relative">
          <PostHeader
            post={post}
            showTopMenu={showTopMenu}
            isShowTopMenu={isShowTopMenu}
          />
        </div>
        <div className="bb b--light-gray ph1 pv2">
          {post.text}
        </div>
        <div className="pt1 ph1">
          <Button className="pa1 light-silver pointer" icon="fa-thumbs-up" />
          <Button className="pa1 light-silver pointer" icon="fa-comment" />
          <Button className="pa1 light-silver pointer" icon="fa-share" />
        </div>
      </div>
      <div className="bg-near-white">
        <div className="bb b--light-gray pa2 f7">
          {engagements.map(item => (
            <Icon key={item} className="mr1 pa1 white br-100" name={getIcon(item)} />
          ))}
          {post.engagement.total}
        </div>
        <div className="bb b--light-gray pa1">
          {post.comments.map(x => (
            <div key={x.user.id} className="flex">
              <img className="w2 h2" src={x.user.avatar} alt={x.user.name} />
              <div className="pa1">
                <a className="link b f6" href={`/profile?id=${post.user.id}`}>{x.user.name}</a> {x.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex pa1">
          <input className="input-reset outline-0 ba bw1 b--light-gray flex-auto br2 pa1" />
          <Button className="pa1 light-silver pointer" icon="fa-picture-o" />
          <Button className="pa1 light-silver pointer" icon="fa-camera" />
        </div>
      </div>
    </div>
  )
}

FacebookPost.defaultProps = {
  className: null,
}

export default withState('isShowTopMenu', 'showTopMenu', false)(FacebookPost)
