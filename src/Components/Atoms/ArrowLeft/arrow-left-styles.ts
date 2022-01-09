import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface PageControlProps {
  position: string;
  left: string;
  top: string;
}

export const ArrowLeft = styled(NavLink)<PageControlProps>`
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};

  cursor: pointer;
  @media (max-width: 720px) {
    display: none;
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
    transform: rotate(-34deg);
  }
  &: after {
    transform: rotate(34deg);
  }
  &:hover {
    &:before,
    &:after {
      margin: 35px 0;
    }
    &:before {
      transform: rotate(-71deg);
    }
    &:after {
      transform: rotate(71deg);
    }
  }
`;

export const Empty = styled.span`
  display: none;
`;
