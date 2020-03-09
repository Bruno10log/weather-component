import React, { useState } from 'react';
import { WeatherContainer, Spinner } from './styles';
import { WeatherList } from './list';
import { HeaderWeather } from './header';
import api from './service/api';

export function Weather(props) {

    const[forecast, setForecast] = useState([]);
    const[loading, setLoading] = useState(false);
    const cities =  props.cities

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