import React from 'react'
import { Container, Header, Menu, Dropdown, Image } from 'semantic-ui-react'

export function HeadElem (props) {
  return (<Menu fixed='top'>
    <Container>
      <Menu.Item as='a' header>
        <Image />
        collegiate-blog
      </Menu.Item>
      <Menu.Item as='a'>About</Menu.Item>
      <Menu.Item as='a'>Contact</Menu.Item>

      <Dropdown item simple text='Admin'>
        <Dropdown.Menu>
          <Dropdown.Item>Articles</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Account</Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
</Menu>)
}
