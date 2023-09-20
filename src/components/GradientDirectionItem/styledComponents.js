// Style your elements here
import styled from 'styled-components'

export const ButtonList = styled.li`
  margin-left: 20px;
`
export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => (props.isActive ? '#ffff' : '#ffffff79')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
