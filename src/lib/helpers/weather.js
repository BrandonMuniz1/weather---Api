const formatWeather = ({feels_like}) => {
    //weather condition (snow, rain, etc) //whether is hot, cold, moderate
    switch(true) {
        case feels_like > 88:
         return 'Hot';

        case feels_like < 55:
         return 'Cold';
        
        default:
         return 'Moderate';
    }
}

module.exports = {
    formatWeather,
}