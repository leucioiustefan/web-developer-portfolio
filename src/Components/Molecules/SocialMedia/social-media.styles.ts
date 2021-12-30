import styled from 'styled-components';

interface ListItemProps {
  slideRight: number;
}

export const List = styled.ul`
  list-style: none;
  width: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItem = styled.li<ListItemProps>`
  width: 50px;
  height: 50px;
  &:nth-of-type(1) {
    transition: transform 625ms cubic-bezier(0.05, 0.65, 0.18, 1);
    background: #4267b2;
    transform: translateX(${props => (props.slideRight === 0 ? '0' : '-50')}px);
  }
  &:nth-of-type(2) {
    transition: transform 925ms cubic-bezier(0.05, 0.65, 0.18, 1);
    background: #4e545a;
    transform: translateX(${props => (props.slideRight === 0 ? '0' : '-50')}px);
  }
  &:nth-of-type(3) {
    transition: transform 1225ms cubic-bezier(0.05, 0.65, 0.18, 1);
    background: #2867b2;
    transform: translateX(${props => (props.slideRight === 0 ? '0' : '-50')}px);
  }
`;

export const Anchor = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  transition: transform 800ms cubic-bezier(0.05, 0.65, 0.18, 1);
  &:hover {
    transform: translate3d(20px, 0, 0);
  }
`;

export const FollowMe = styled.small`
  font-size: 10px;
  color: #a1a1a1;
  padding: 0 0 10px 5px;
  opacity: 0.6;
  letter-spacing: 0.1px;
  font-weight: 500;
`;
