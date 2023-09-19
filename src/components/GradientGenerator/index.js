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
  Button,
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
    colorDirectionTo: gradientDirectionsList[0].directionId,
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

  colorDirectionTo = id => {
    this.setState({
      colorDirectionTo: id,
    })
  }

  onGenerateBackgroundColor = () => {}

  render() {
    const {firstInputColor, secondInputColor, colorDirectionTo} = this.state
    return (
      <Container
        bgImage={`linear-gradient(to ${
          (colorDirectionTo.value, firstInputColor, secondInputColor)
        })`}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              onClickDirection={this.colorDirectionTo}
              isActive={colorDirectionTo === each.directionId}
            />
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
        <Button type="button" onClick={this.onGenerateBackgroundColor}>
          Generate
        </Button>
      </Container>
    )
  }
}

export default GradientGenerator
