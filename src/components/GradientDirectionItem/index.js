// Write your code her
import {ButtonList, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickDirection} = props
  const {directionId, value, displayText} = details

  const onClickButton = () => {
    onClickDirection(directionId)
  }

  return (
    <ButtonList>
      <Button type="button" onClick={onClickButton}>
        {displayText}
      </Button>
    </ButtonList>
  )
}

export default GradientDirectionItem
