import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Project = styled(NavLink)`
  opacity: 0.7;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  margin-left: 10px;
  margin-top: 15px;
  background: #333333;
  text-decoration: none;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const Name = styled.h3`
  color: #989898;
  font-size: 1.5rem;
  transition: all 0.2s ease-in;
  margin-top: 1rem;
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;
