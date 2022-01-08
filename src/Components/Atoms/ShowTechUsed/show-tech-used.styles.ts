import styled from 'styled-components';

interface ProjectProps {
  show: boolean;
}

export const Container = styled.div<ProjectProps>`
  width: 477px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

export const Button = styled.button`
  background: hsl(136deg, 0%, 20%);
  font-family: 'Montserrat';
  text-decoration: none;
  font-weight: 700;
  display: block;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  font-size: 0.9rem;
  background: hsl(0deg, 0%, 28%);
  color: #a3a3a3;
`;
