import React from 'react';
import { WeatherItem } from './item';
import { List } from './styles';

export function WeatherList(props) {

    const forecast = props.forecast;
    forecast.shift();

    return(
        <List>
            {
                forecast.map((item, index)=> {
                    return(
                        <li key={index}>
                            <WeatherItem 
                                item={item}
                            >
                            </WeatherItem>
                        </li>
                    )
                })
            }
           
        </List>

    );

}