import React from 'react';
import { Card, InfoWeather } from './styles';
import { weatherImgSource, daysOfWeek } from '../../utils';

export function WeatherItem(props) {
    
    const weatherItem = props.item;

    const infoWeather = [
        {
            label: 'min',
            value:  weatherItem.min_temp
        },
        {
            label: 'max',
            value:   weatherItem.max_temp
        },
        {
            label: 'w speed',
            value: weatherItem.wind_speed
        },
        {
            label: 'w dir',
            value: weatherItem.wind_direction
        }
    ]

    return(
        <Card>
            <h3>
                {
                    daysOfWeek[new Date(weatherItem.applicable_date).getDay()]
                }
            </h3>
            <img src={weatherImgSource + weatherItem.weather_state_abbr + '.svg'} 
                 alt={weatherItem.weather_state_name} >
               
            </img>
            <b>
               {
                   weatherItem.the_temp.toFixed()
               }°
            </b>

            <ul>
                {
                    infoWeather.map((info, index) => {
                        return (
                            <li key={index}>
                                <InfoWeather> 
                                    <h3>
                                        {
                                            info.label
                                        }
                                    </h3>
            
                                    <label>
                                        {
                                            info.value.toFixed()
                                        }
                                    </label>
                                </InfoWeather>
                            </li>
                        );
                    })
                }
            </ul>

        </Card>
    );

}