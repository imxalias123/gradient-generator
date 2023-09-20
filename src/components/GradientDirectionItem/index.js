// Write your code her
import {ButtonList, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickDirection, isActive} = props
  const {directionId, value, displayText} = details

  const onClickButton = () => {
    onClickDirection(value)
  }

  return (
    <ButtonList>
      <Button type="button" onClick={onClickButton} isActive={isActive}>
        {displayText}
      </Button>
    </ButtonList>
  )
}

export default GradientDirectionItem
