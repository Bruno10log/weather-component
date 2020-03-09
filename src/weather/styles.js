import styled, { keyframes } from 'styled-components';

export const WeatherContainer = styled.div`
    max-width: 1320px;
    background-color: #3d5b89;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px auto;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 6px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
