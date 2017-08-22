let HeaderComponent = React.createClass({
  render: () => (<div><h1>collegiate-blog</h1><h2>The definitive source for something</h2></div>)
})

ReactDOM.render(
  <HeaderComponent/>,
  document.getElementById('header')
)

let BodyComponent = React.createClass({
  render: () => (<div>blah blah</div>)
})

ReactDOM.render(
  <BodyComponent />,
  document.getElementById('content')
)
