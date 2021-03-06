import styled from 'styled-components';

interface MenuProps {
  active: boolean;
}

export const Menu = styled.div<MenuProps>`
  width: 50px;
  position: absolute;
  left: 93%;
  bottom: 90%;
  z-index: 200;
  cursor: pointer;
  @media (max-width: 700px) {
    left: 85%;
  }
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.2);
  }
  &:before,
  &:after {
    background: #808080;
    content: '';
    display: block;
    height: 2px;
    width: 40px;
    border-radius: 3px;
    margin: 7px 0;
    transition: all 0.4s ease-in-out;
  }
  &:before {
    ${props =>
      props.active ? 'transform: translateY(12px) rotate(135deg)' : ''}
  }
  &:after {
    ${props =>
      props.active ? 'transform: translateY(-12px) rotate(-135deg)' : ''}
  }
  & div {
    ${props => (props.active ? 'transform: scale(0)' : '')}
  }
`;

export const MiddleLine = styled.div`
  background: #808080;
  height: 2px;
  width: 40px;
  border-radius: 3px;
  margin: 10px 0;
  transition: all 0.4s ease-in-out;
`;
