import React, {useState} from 'react'
import styled from 'styled-components'
import {Card, Button, Container} from '@material-ui/core'
import {colors} from '../constants'

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
`
const StyledCard = styled(Card)`
  padding: 16px;
  
  h1 {
    font-weight: lighter;
    text-align: center;
  }
`
const ButifulButton = styled(Button)`
  border-radius: 8px;
  background: linear-gradient(45deg, ${colors.gradientPink} 0%, ${colors.gradientBlue} 100%);
  color: white;
  padding: 10px 25px;
  :focus, :active {
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2),
                0 2px 2px 0 rgba(0,0,0,0.14),
                0 3px 1px -2px rgba(0,0,0,0.12);
  }
`

export const TestScreen = (): JSX.Element => {
  const [counter, setCounter] = useState(0)

  return (
    <CenteredContainer maxWidth='sm'>
      <StyledCard>
        <h1>You clicked the button {counter} {counter < 2 ? 'time' : 'times'} !</h1>
        <ButifulButton
          variant='contained'
          fullWidth
          onClick={() => setCounter(counter + 1)}
          data-testid='counterButton'
        >
          Increase
        </ButifulButton>
      </StyledCard>
    </CenteredContainer>
  )
}
