import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

const ListCursosRutas = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button color='green'>Entrar</Button>
      </List.Content>
      <Image avatar src='https://static.platzi.com/media/achievements/badges-diseno-prototipos-cafa4c74-46aa-40c4-8b9c-8efa99b2b296.png' />
      <List.Content>Diseño de prototipos</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button color='green'>Entrar</Button>
      </List.Content>
      <Image avatar src='https://static.platzi.com/media/achievements/badge-xd-349e5d51-5cda-4449-abe4-647abae5af0c.png' />
      <List.Content>Diseño de interfaz con Adobe XD</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button color='green'>Entrar</Button>
      </List.Content>
      <Image avatar src='https://static.platzi.com/media/achievements/badges-terminal-c9ee432b-2598-4e94-88d8-0a30842ef886.png' />
      <List.Content>Terminal - linea de comandos</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button color='green'>Entrar</Button>
      </List.Content>
      <Image avatar src='https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png' />
      <List.Content>Git y GitHub</List.Content>
    </List.Item>
  </List>
)

export default ListCursosRutas;