let HeaderComponent = React.createClass({
  render: () => (<div><h1>collegiate-blog</h1><h2>The definitive source for something</h2></div>)
})

ReactDOM.render(
  <HeaderComponent/>,
  document.getElementById('header')
)

let BodyComponent = React.createClass({
  render: () => (<div>All Posts:<div id='posts'></div></div>)
})

ReactDOM.render(
  <BodyComponent />,
  document.getElementById('content')
)

// retrieve and render post summary
axios.get('/posts/all')
.then(resp => {
  let postList = resp.data.map(item => <li>{item.title + ' - ' + item.author}</li>)
  ReactDOM.render(<ul>{postList}</ul>, document.getElementById('posts'))
})
.catch(e => {
  alert('Error getting posts: ' + e)
})
