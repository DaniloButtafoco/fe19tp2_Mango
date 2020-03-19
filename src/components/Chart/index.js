import React, { Component } from 'react';
import { Pie, Line } from 'react-chartjs-2'
import { response, getMonthlyCrimesObject, getCustomMonthlyCrimesObject, getCustomDailyCrimesObject, getCustomCrimesTodayObject, getCrimesByType } from '../Home/response'
import { getCustomCrimeTypes } from '../Home/helper';
import styles from '../Chart/index.css'

import Styled from 'styled-components'

const monthlyCrimes = getMonthlyCrimesObject();

const labels = Object.keys(monthlyCrimes)
const data = Object.values(monthlyCrimes)
console.log("hardcoded:")
console.log(data);
const state = {
    labels: labels,
    datasets: [
        {
            label: 'Brott',
            backgroundColor: [
                '#003f5c',
                '#2f4b7c',
                '#665191',
                '#a05195',
                '#d45087',
                '#f95d6a',
                '#ff7c43',
                '#ffa600'

            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: data
        }
    ]
}

const makeChartData = (crimes) => {
    const labels = Object.keys(crimes)
    const data = Object.values(crimes)
    return {
        labels: labels,
        datasets: [
            {
                label: 'Brott',
                backgroundColor: [
                    '#003f5c',
                    '#58508d',
                    '#bc5090',
                    '#ff6361',
                    '#ffa600'
                ],
                hoverBackgroundColor: [
                    '#ccc',
                    '#ccc',
                    '#ccc',
                    '#ccc',
                    '#ccc'
                ],
                data: data
            }
        ]
    }
}
console.log(response)

const ChartContainer = Styled.div`
box-shadow:
  0 0.5px 3.6px -4px rgba(0, 0, 0, 0.14),
  0 1.3px 10px -4px rgba(0, 0, 0, 0.098),
  0 3px 24.1px -4px rgba(0, 0, 0, 0.083),
  0 10px 80px -4px rgba(0, 0, 0, 0.057)
;

border-radius: 10px;
width: 100%;

`
const Column = Styled.div`
display: grid;
padding-left: 20%;
grid-template-columns: 550px 550px;
grid-template-rows: 325px 325px; 
grid-column-gap: 20px;
grid-row-gap: 20px;
border: 1px;

`
const Container = Styled.div`
margin-top: 2%;
`
/*
<Column>
<ChartContainer><Line/></ChartContainer>
<ChartContainer><Pie/></ChartContainer>
</Column>
<Column>
<ChartContainer><Line/></ChartContainer>
<ChartContainer><Pie/></ChartContainer>
</Column>
<Column>
<ChartContainer><Line/></ChartContainer>
<ChartContainer><Pie/></ChartContainer>
</Column>
*/

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        const today = new Date();
        const dateToday = today.getDate();

        const monthlyCrimes = getCustomMonthlyCrimesObject(this.props.result);
        const dailyCrimes = getCustomDailyCrimesObject(this.props.result, 3); // {1: 243, 2: 140, 6: 24}
        const crimeTypes = getCrimesByType(this.props.result);

        //const todaysCrimes = getCustomCrimesTodayObject(this.props.result);
        const todayCrimeCount = dailyCrimes[dateToday] || 0 // 29




        console.log(getCustomCrimeTypes(this.props.result));
        //const labels = Object.keys(monthlyCrimes)
        //const data = Object.values(monthlyCrimes)

        //console.log("api")
        //console.log(data)
        return (
            <Container>
                <Column>
                    <ChartContainer>
                        <div className='todayCount'>{todayCrimeCount} <p>brott hittills idag</p></div>
                    </ChartContainer>
                    <ChartContainer>
                        <Line
                            data={makeChartData(monthlyCrimes)}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Antal fall per månad',
                                    fontSize: 20,
                                },
                                legend: {
                                    display: true,
                                },
                                layout:{
                                    padding:{
                                        left:50,
                                        right:0,
                                        bottom:0,
                                        top:0,

                                    margin:{
                                        top:10,
                                    },

                
                                    },

                                }

                            }}

                        />
                    </ChartContainer>
                    <ChartContainer>
                        <Line
                            data={makeChartData(dailyCrimes)}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Antal fall per veckodag',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                },

                            }}

                        />
                    </ChartContainer>


                    <ChartContainer>
                        <Pie
                            data={makeChartData(crimeTypes)}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Typ av brott',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }

                            }}
                        />
                    </ChartContainer>



                </Column>
            </Container>
        );
    }
}

export default Chart;
