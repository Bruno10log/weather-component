import styled from 'styled-components';

export const WeatherButtonList = styled.ul`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    padding: 0px;
    li {
        margin-bottom: 6px;
    }
`;

export const WeatherButton = styled.button`
    width: 280px;
    height: 60px;
    background-color: ${props => props.selected ? '#5c7e9d' : 'white'};
    border-radius: 6px;
    font-size: 25px;
`;