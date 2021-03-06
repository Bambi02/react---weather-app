import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const RainChart = ({ forecastData, threeHrsData, thisDayData }) => {

    const thisDay = new Date(thisDayData.dt * 1000).getDay();
    const today = new Date().getDay();

    const thisDayThreeHrsForecast = threeHrsData.list.filter( day => {
        const loopingDay = new Date(day.dt * 1000).getDay();
        return loopingDay === thisDay;
    });

    const todaysOneHourForcast = forecastData.hourly.filter( hour => {
        const loopingHour = new Date(hour.dt * 1000 ).getDay();
        if(loopingHour === today && loopingHour === thisDay){
            return loopingHour
        }
    })

    const threeHrsForecastHours = thisDayThreeHrsForecast.map( threeHrs =>  new Date(threeHrs.dt * 1000).getHours());
    const threeHrsforecastRain = thisDayThreeHrsForecast.map( threeHrs =>  Math.round(threeHrs.pop * 100) );

    const todayForecastHours = todaysOneHourForcast.length ? todaysOneHourForcast.map( hour =>  new Date(hour.dt * 1000).getHours() ) : null;
    const todayForecastRain = todaysOneHourForcast.length ? todaysOneHourForcast.map( hour =>  Math.round(hour.pop * 100) ) : null;

    const modifiedHrs = orgArr => orgArr.map( hour => hour < 10 ? `0${hour}:00` : `${hour}:00` );

    const chart = threeHrsForecastHours.length ? (
        <Line
            data={{
                labels: todayForecastHours ? modifiedHrs(todayForecastHours) : modifiedHrs(threeHrsForecastHours),
                datasets:[{
                    label: 'Pravdepodobnosť zrážok',
                    data: todayForecastRain ? todayForecastRain : threeHrsforecastRain,
                    backgroundColor: 'transparent',
                    borderColor: '#e7ad40',
                    hoverBackgroundColor: 'gray',
                }]
            }}

            options={{ 
                responsive: true,
                maintainAspectRatio: false ,
                legend:{
                    display: false
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 30,
                    }
                },
                tooltips:{
                    displayColors: false,
                    titleMarginBottom: 10,
                    xPadding: 20,
                    callbacks: {
                        title: function() {
                            return 'Zrážky:';
                        },
                        label: function(tooltipItem, chart) {
                            return (tooltipItem.yLabel + '%')
                        },
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontStyle: 'normal',
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 130,
                            display: false,
                        }
                    }]
                },
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        font:{
                            family: 'weathericons',
                            size: 15,
                        },
                        formatter: function(value) {
                            return  '\uf078 ' + value + ' %';
                        },
                    }
                },
            }}
        />
        ) : (
            null
        );


    return(
        <div className="chart">
            { chart }
            <h2>pravdepodobnosť zrážok</h2>
        </div>
    )
}

export default RainChart