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
    colorDirectionTo: gradientDirectionsList[0].value,
    generated: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
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

  directionOfColor = value => {
    this.setState({
      colorDirectionTo: value,
    })
  }

  onGenerateBgColor = event => {
    const {firstInputColor, secondInputColor, colorDirectionTo} = this.state
    console.log(firstInputColor)
    event.preventDefault()
    this.setState({
      generated: `to ${colorDirectionTo}, ${firstInputColor}, ${secondInputColor}`,
    })
  }

  render() {
    const {
      firstInputColor,
      secondInputColor,
      colorDirectionTo,
      generated,
    } = this.state

    return (
      <Container
        onSubmit={this.onGenerateBgColor}
        data-testid="gradientGenerator"
        bgImage={`linear-gradient(${generated})`}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              onClickDirection={this.directionOfColor}
              isActive={colorDirectionTo === each.value}
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
        <Button type="submit">Generate</Button>
      </Container>
    )
  }
}

export default GradientGenerator
