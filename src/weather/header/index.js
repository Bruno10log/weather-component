import React, { useState,useEffect } from 'react';
import { WeatherButton, WeatherButtonList } from './styles';

export function HeaderWeather(props) {

    const[cities] = useState(props.cities);
    const [id, setId] = useState(cities[0].woeid);
    const search = props.searchAction;
    const loading = props.loading;

    useEffect(() => {
       search(id);
       // eslint-disable-next-line
    }, [id])

    return(
        <WeatherButtonList>
            {
                cities.map((city, index) => {
                    return (
                        <li key={ index }>
                            <WeatherButton 
                                selected={id === city.woeid}
                                disabled = {loading}
                                onClick={() => setId(city.woeid)}>
                                { city.name }
                            </WeatherButton>
                        </li>
                    );
                })
            }
        </WeatherButtonList>
    );

}