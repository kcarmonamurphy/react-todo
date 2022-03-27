import styled from 'styled-components'

const InputStyled = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #00aff5;
  color: #00aff5;
  padding: 0.25em 1em;
  font-size: medium;
  display: block;
  &:hover {
    border: 2px solid #0087f5;
    color: #0087f5;
    background: #00aff521;
  }
`;

const ValidationMessage = styled.span`
  color: red;
  font-size: small;
  display: block;
`;

const Input = (props) => {
  let validation
  if (props.validationMessage) {
    validation = <ValidationMessage>{props.validationMessage}</ValidationMessage>
  }

  return (
      <span>
          <InputStyled {...props} />
          {validation}
      </span>
  );
};

export default Input
