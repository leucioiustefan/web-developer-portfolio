import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background: hsl(0deg, 100%, 17%);
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
`;

export const Anchor = styled.a`
  font-family: 'Montserrat';
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  padding: 12px 20px;
  border-radius: 2px;
  font-size: 0.75rem;
  background: hsl(0deg 98% 39%);
  color: #e6e6e6;
  transition: all 0.2s ease-in-out;
  transform: translateY(-4px);
  &:hover {
    transform: translateY(-2px);
  }
`;
