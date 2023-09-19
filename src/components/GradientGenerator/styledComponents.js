// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
  background-image=${props => props.bgImage};
  height: 100vh;
`

export const Heading = styled.h1`
  color: #ededed;
  font-size: 30px;
`
export const Para = styled.p`
  color: #ffffff79;
  font-size: 20px;
`
export const UnorderedList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
`
export const WrapColorInputs = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Input = styled.input`
  width: 80px;
  height: 50px;

  opacity: 0.5;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`
export const Label = styled.p`
  color: #fff;
`
export const Button = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  border: none;
  font-weight: 700;
`
