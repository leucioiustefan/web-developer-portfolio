import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  @media (max-width: 850px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const FormGhost = styled.div`
  position: absolute;
  visibility: hidden;
`;
