import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  width: 836px;
  height: 150px;
  & h2 {
    color: #cacaca;
    font-size: 1.7rem;
    letter-spacing: 0.9px;
    padding-bottom: 1rem;
    font-weight: 600;
  }
  & h3 {
    font-weight: 500;
    color: #a3a3a3;
    font-size: 1.1rem;
    letter-spacing: 0.8px;
    padding-bottom: 0.8rem;
  }
`;

export const Anchor = styled.a`
  display: inline-block;
  color: #e6e6e6;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    background: rgba(154, 154, 154, 0.2);
  }
`;
