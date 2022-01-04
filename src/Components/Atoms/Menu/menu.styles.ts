import styled from 'styled-components';

interface MenuProps {
  isClicked: boolean;
}

export const Menu = styled.div<MenuProps>`
  width: 50px;
  position: absolute;
  left: 93%;
  bottom: 90%;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.2);
  }
  &:before,
  &:after {
    background: #969696;
    content: '';
    display: block;
    height: 2px;
    width: 40px;
    border-radius: 3px;
    margin: 7px 0;
    transition: all 0.5s ease-in-out;
  }
  &:before {
    ${props =>
      props.isClicked ? 'transform: translateY(12px) rotate(135deg)' : ''}
  }
  &:after {
    ${props =>
      props.isClicked ? 'transform: translateY(-12px) rotate(-135deg)' : ''}
  }
  & div {
    ${props => (props.isClicked ? 'transform: scale(0)' : '')}
  }
`;

export const MiddleLine = styled.div`
  background: #969696;
  height: 2px;
  width: 40px;
  border-radius: 3px;
  margin: 10px 0;
  transition: all 0.5s ease-in-out;
`;
