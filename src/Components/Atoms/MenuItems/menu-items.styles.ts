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
  color: white;
  background: #363636;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`;
