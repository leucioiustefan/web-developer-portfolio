import styled from 'styled-components';

interface LabelProps {
  isTyping: boolean;
}

export const Container = styled.div``;

export const Text = styled.div`
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  color: #cacaca;
  font-size: 2rem;
  line-height: 1.45rem;
  font-weight: 700;
  letter-spacing: -2px;
  text-shadow: 2px 2px 0 rgb(0 0 0 / 15%);
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.7rem;
  color: #8a8a8a;
  margin-bottom: 5px;
`;

export const Anchor = styled.a`
  display: inline-block;
  color: #e6e6e6;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    background: rgba(154, 154, 154, 0.2);
  }
`;

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
