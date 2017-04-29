const post = {
  user: {
    id: '000',
    name: 'Geogia Naghi',
    avatar: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=avatar&w=100&h=100',
  },
  link: 'http://facebook.com/post/111',
  text: 'My cat is just building a wall...',
  publishTime: '2017-04-26T18:25:43.511Z',
  engagement: {
    like: [
      { id: '111', name: 'John' },
      { id: '222', name: 'Mary' },
    ],
    angry: [
      { id: '333', name: 'Bob' },
    ],
    love: [
      { id: '444', name: 'Henry' },
    ],
    total: 4,
  },
  comments: [
    {
      user: {
        id: '444',
        name: 'Henry',
        avatar: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=avatar&w=100&h=100',
      },
      text: 'It\'s so cute',
    },
  ],
}

export default post
