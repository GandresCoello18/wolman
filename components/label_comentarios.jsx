import React from 'react'
import { Label, Icon } from 'semantic-ui-react'

const LabelComentarios = () => (
  <Label style={{ cursor: 'pointer' }} color='teal'>
    Comentarios:
    <Label.Detail>21 <Icon name="comment" /></Label.Detail>
  </Label>
)

export default LabelComentarios;