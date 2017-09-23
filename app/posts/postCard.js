import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export function PostCard (props) {
  return (<Card>
   <Card.Content>
     <Card.Header>{props.post.title}</Card.Header>
     <Card.Meta>{props.post.date.toLocaleDateString()}</Card.Meta>
     <Card.Description>{props.post.subtitle}</Card.Description>
   </Card.Content>
   <Card.Content extra>
     <a>
       <Icon name='lab' />
       Science / Tech
     </a>
   </Card.Content>
 </Card>)
}
