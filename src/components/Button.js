import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #00aff5;
  color: #00aff5;
  padding: 0.25em 1em;
  cursor: pointer;
  font-size: medium;
  &:hover {
    border: 2px solid #0087f5;
    color: #0087f5;
    background: #00aff521;
  }
  
  ${props => props.primary && css`
    background: #00aff5;
    color: white;
    &:hover {
      border: 2px solid #00aff521;
      color: white;
      background: #0087f5;
    }
  `}
`;

export default Button
