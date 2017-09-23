import React from 'react'
import { List, Card, Container } from 'semantic-ui-react'
import { PostCard } from './postCard.js'

// TODO: replace this with real data
let articles = [
  {
    _id: 'deadbeef',
    title: 'Lorem Ipsum',
    subtitle: 'basdfsf',
    author: 'Julius C.',
    date: new Date()
  },
  {
    _id: '0000asdf',
    title: 'Dolor Sit Amet',
    subtitle: 'asdqweqwe',
    author: 'Gaius C.',
    date: new Date()
  }
]

export function PostList () {
  let articleCards = articles.map(item => <PostCard post={ item } key={ item._id }></PostCard>)
  return (
    <Container style={{ marginTop: '10%' }}>
      <Card.Group>
        { articleCards }
      </Card.Group>
    </Container>
  )
}
