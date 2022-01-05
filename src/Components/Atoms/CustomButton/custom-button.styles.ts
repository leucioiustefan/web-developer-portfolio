import styled from 'styled-components';

export const Button = styled.button`
  background: hsl(0deg, 0%, 30%);
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  margin-right: 10px;
`;

export const Inner = styled.div`
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  padding: 12px 20px;
  border-radius: 2px;
  font-size: 0.75rem;
  background: hsl(0deg, 0%, 47%);
  color: #e6e6e6;
  transition: all 0.2s ease-in-out;
  transform: translateY(-4px);
  &:hover {
    transform: translateY(-2px);
  }
`;
