import React from 'react'
import { render } from 'react-dom'
import { HeadElem } from './header/headElem.js'
import { PostList } from './posts/postList.js'

const MOUNT_NODE = document.getElementById('root')
const App = () => (
  <div>
    <HeadElem />
    <PostList />
  </div>
)

render(<App />, MOUNT_NODE)
