import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 50px;
  height: 50px;
  &:nth-of-type(1) {
    background: #4267b2;
  }
  &:nth-of-type(2) {
    background: #4e545a;
  }
  &:nth-of-type(3) {
    background: #2867b2;
  }
`;

export const Anchor = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  transition: transform 1000ms cubic-bezier(0.05, 0.65, 0.18, 1);
  &:hover {
    transform: translate3d(20px, 0, 0);
  }
`;
