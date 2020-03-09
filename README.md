## Weather React Component

This component shows info about cities next 5 days forecast searched in [MetaWeather api](https://www.metaweather.com/)
To use all you need is provide in props an array with cities that you want to show and the respectives [woeid](https://pt.wikipedia.org/wiki/WOEID).

Example: 

```
function App() {

  const cities = [{
                      name: 'São Paulo',
                      woeid: 455827
                  }, 
                  {
                      name: 'Lisbon',
                      woeid: 742676
                  },
                  {
                      name: 'Berlin',
                      woeid: 638242
                  },
                  {
                      name: 'London',
                      woeid: 44418
                  },
                ];

  return (  
      <Weather cities={cities}>
      </Weather>
  );
}
```

You could see this working [here](https://weather-component-49c90.firebaseapp.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run

In the project directory, you can run:

### `npm install`
### `npm start`
