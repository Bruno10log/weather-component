import React, { useState } from 'react';
import { WeatherContainer, Spinner } from './styles';
import { WeatherList } from './list';
import { HeaderWeather } from './header';
import api from './service/api';
import PropTypes from 'prop-types'; 

Weather.propTypes= {
    cities: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        woeid: PropTypes.number.isRequired
    })).isRequired
}
export function Weather({cities=[{name: 'São Paulo', woeid: 455827}]}) {

    const[forecast, setForecast] = useState([]);
    const[loading, setLoading] = useState(false);
    
    async function searchWeather(id) {

        try {      
            setLoading(true);

            const response = await api.get(`location/${id}`);
            
            if(response) {
                setForecast(response.data.consolidated_weather);
            }
        }catch(e) {
            console.log(e);
            alert('Ops, something went wrong!')
        } finally {
            setLoading(false);
        }
            
    }
    
    return(
        <WeatherContainer>
            <HeaderWeather 
                searchAction={searchWeather}    
                loading={loading}
                cities={cities}
            >
            </HeaderWeather>

            {loading ? (
                    <Spinner></Spinner>
                ) : (
                    <WeatherList
                        forecast={forecast}    
                    >
                    </WeatherList>
                )
            }

        </WeatherContainer>
    );

}