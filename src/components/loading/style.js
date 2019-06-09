import styled, { keyframes } from 'styled-components';

export const rotate360 = keyframes`
  from {
    transfrom: rotate(0deg);
  }

  to {
    transfrom: rotate(360deg)
  }
`;

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
`;
