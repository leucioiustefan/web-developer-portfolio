import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

export const Arrow = styled.em`
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  top: calc(50% - 18.5px);
  left: calc(50% - 18px);
  &:before {
    content: ' ';
    position: absolute;
    right: 0;
    height: 100%;
    width: 2px;
    background-color: #7a7a7a;
  }
  &:after {
    content: ' ';
    position: absolute;
    right: 0;
    height: 100%;
    width: 2px;
    background-color: #7a7a7a;
  }
`;
