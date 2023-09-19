// Write your code her
import {ButtonList, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details} = props
  const {directionId, value, displayText} = details

  return (
    <ButtonList>
      <Button type="button">{displayText}</Button>
    </ButtonList>
  )
}

export default GradientDirectionItem
