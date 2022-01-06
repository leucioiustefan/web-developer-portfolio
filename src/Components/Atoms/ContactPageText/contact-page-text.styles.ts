import styled from 'styled-components';

export const Text = styled.div`
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  color: #cacaca;
  font-size: 2rem;
  line-height: 1.45rem;
  font-weight: 700;
  letter-spacing: -2px;
  text-shadow: 2px 2px 0 rgb(0 0 0 / 15%);
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.7rem;
  color: #8a8a8a;
  margin-bottom: 5px;
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
