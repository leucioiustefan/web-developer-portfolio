import styled from 'styled-components';

interface LabelProps {
  isTyping: boolean;
}

export const Form = styled.form`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 5%;
`;

export const Label = styled.label<LabelProps>`
  visibility: ${props => (props.isTyping ? 'hidden' : 'visible')};
  position: absolute;
  top: 10%;
  left: 4%;
  font-family: 'Montserrat';
  line-height: 18px;
  font-weight: 700;
  font-size: 17px;
  color: #6a6a6a;
  cursor: text;
`;

export const Input = styled.input`
  display: block;
  width: 80%;
  height: 100%;
  padding: 6px 14px 5px 33px;
  font-size: 18px;
  font-weight: 700;
  color: #797979;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #797979;
  background-color: inherit;
  margin-bottom: 30px;
  &: focus {
    outline: none;
  }
`;
