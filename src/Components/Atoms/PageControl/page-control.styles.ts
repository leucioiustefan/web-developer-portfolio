import styled from 'styled-components';

export const Arrow = styled.div`
  position: relative;
  left: -5%;
  cursor: pointer;
  &:hover {
    &:before,
    &:after {
      margin: 35px 0;
    }
    &:before {
      transform: rotate(70deg);
    }
    &:after {
      transform: rotate(-70deg);
    }
  }
  &:before,
  &:after {
    background: #808080;
    content: '';
    display: block;
    height: 2px;
    width: 40px;
    border-radius: 3px;
    margin: 20px 0;
    transition: all 0.4s ease-in-out;
  }
  &:before {
    transform: rotate(33deg);
  }
  &: after {
    transform: rotate(-33deg);
  }
`;
