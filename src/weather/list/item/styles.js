import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 #000;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 5px;

    :hover {
        box-shadow: 0 8px 16px 0 #000;
    }

    img {
        height: 60px;
        width: 80%;
    }

    b {
        font-size: 40px;
    }

    ul {
        flex-wrap: wrap; 
        margin: 10px;
        width: 90%;
        li{
            width: 40%;
        }
    }
`;

export const InfoWeather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 15px;    
    }

    label {
        font-size: 30px;
    }

`;

  