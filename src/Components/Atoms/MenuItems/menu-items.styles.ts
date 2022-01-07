import styled from 'styled-components';
import { animated } from 'react-spring';

export const DarkOverlay = styled(animated.div)`
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0);
  transition: all 0.5s ease-in;
`;

export const Container = styled(animated.div)`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in;
`;

export const MenuItemsContainer = styled.div`
  color: #848484;
  background: #363636;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  text-transform: lowercase;
  cursor: pointer;
  & h3 {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -1px;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: all 0.2s ease-in;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #454545;
      color: #747474;
    }
  }
`;
