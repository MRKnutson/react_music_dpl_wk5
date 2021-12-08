import { Button } from "semantic-ui-react"
import styled from "styled-components"

export const WHITE  = '#f0f5f1'
export const BLACK = '#171a17'
export const RED = '#a80a0a'
export const GREEN = 'rgb(17, 107, 41)'

export const AppContainer = styled.div`
  background: rgb(62,62,62);
  background: linear-gradient(61deg, rgba(120,0,48,1) 0%, rgba(96,42,98,1) 31%, rgba(6,71,27,1) 100%);
  min-height: 100vh;
  padding: 20px;
`


export const StyledButton = styled(Button)`
  color: ${WHITE} !important;
  background-color: ${props=>props.color} !important;
  border-radius: 4px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset !important;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: box-shadow,transform;
}

&:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset !important;
}

&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset !important;
  transform: translateY(-2px);
}

&:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
`

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.25rem;
  margin-bottom: 20px;
  margin-top: 0px;
`

export const InputLabel = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0px;
`

export const StyledRule = styled.hr`
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 30px;
  color: ${WHITE};
  background-color: ${WHITE};
`