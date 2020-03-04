import React, { Component } from 'react';
import { Pie, Line } from 'react-chartjs-2'
import { response, getMonthlyCrimesObject } from '../Home/response'
import Styled from 'styled-components'
const monthlyCrimes = getMonthlyCrimesObject();
const labels = Object.keys(monthlyCrimes)
const data = Object.values(monthlyCrimes)

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

console.log(response)

const ChartContainer = Styled.div`
width: 100%;
height: 100%;
border: 1px solid lightgrey;
margin-top: 20px;

`
const Column = Styled.div`
padding-left: 15%;
display: grid;
 grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px 10px;
  

`
const Container = Styled.div`
width: 60%;
 
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
        return (
            <Container>
                <Column>
                    <ChartContainer>
                        <Line
                            data={state}
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
                        <Pie
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Antal fall per månad',
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
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Antal fall per månad',
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
                                    text: 'Antal fall per månad',
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
                                    text: 'Antal fall per månad',
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
                                    text: 'Antal fall per månad',
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

