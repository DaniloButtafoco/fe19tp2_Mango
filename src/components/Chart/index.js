import React, { Component } from 'react';
import { Pie, Line } from 'react-chartjs-2'
import { response, getMonthlyCrimesObject, getCustomMonthlyCrimesObject, getCustomDailyCrimesObject, getCustomCrimesTodayObject, getCrimesByType } from '../Home/response'
import { getCustomCrimeTypes } from '../Home/helper';

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
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
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
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
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
}
console.log(response)

const ChartContainer = Styled.div`
border: 1px solid lightgrey;
border-radius: 8px;
width: 100%;

`
const Column = Styled.div`
display: grid;
padding-left: 15%;
grid-template-columns: 350px 350px 400px;
grid-template-rows: 250px auto 200px; 
grid-column-gap: 10px;
grid-row-gap: 15px;
border: 1px;

`
const Container = Styled.div`
margin-top: 10%;
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
        const crimeTypes = getCrimesByType(response);

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
                        <Line
                            data={makeChartData(monthlyCrimes)}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Antal fall per månad',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                },

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
                        <Line
                            data={makeChartData(dailyCrimes)}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Typ av brott',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom',

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
                    <ChartContainer>
                        <Pie
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Senaste typ av brott',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }

                            }}
                        />
                    </ChartContainer>
                    <div>{todayCrimeCount} brott hittils idag</div>
                </Column>
            </Container>
        );
    }
}

export default Chart;
