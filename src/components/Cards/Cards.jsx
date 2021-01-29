import React from 'react'

import { CardContainer, CardLabel, CardH2 } from './styles'

const Cards = props => {
  return (
    <>
      <CardContainer>
        <CardLabel>{props.label}</CardLabel>
        <CardH2>{props.value.toLocaleString()}</CardH2>
      </CardContainer>
    </>
  )
}

export default Cards
