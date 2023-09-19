import {Component} from 'react'

import {
  Container,
  Heading,
  Para,
  UnorderedList,
  WrapColorInputs,
  Input,
  InputContainer,
  Label,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstInputColor: '#8ae323',
    secondInputColor: '#014f7b',
  }

  onChangeFirstInputColor = event => {
    this.setState({
      firstInputColor: event.target.value,
    })
  }

  onChangeSecondInputColor = event => {
    this.setState({
      secondInputColor: event.target.value,
    })
  }

  render() {
    const {firstInputColor, secondInputColor} = this.state
    return (
      <Container>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem key={each.directionId} details={each} />
          ))}
        </UnorderedList>
        <Para>Pick the Colors</Para>
        <WrapColorInputs>
          <InputContainer>
            <Label id="first">{firstInputColor}</Label>
            <Input
              type="color"
              htmlFor="first"
              value={firstInputColor}
              onChange={this.onChangeFirstInputColor}
            />
          </InputContainer>
          <InputContainer>
            <Label id="second">{secondInputColor}</Label>
            <Input
              type="color"
              htmlFor="second"
              value={secondInputColor}
              onChange={this.onChangeSecondInputColor}
            />
          </InputContainer>
        </WrapColorInputs>
      </Container>
    )
  }
}

export default GradientGenerator
