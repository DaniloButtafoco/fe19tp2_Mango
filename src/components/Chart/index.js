import React, { Component } from 'react';
import { Pie , Line} from 'react-chartjs-2'
import { response, getMonthlyCrimesObject } from '../Home/response'

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


class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <Line
                    data={state}
                    width={1000}
                    height={300}
                    options={{
                        title: {
                            display: true,
                            text: 'Antal fall per månad',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                        
                    }}
                />

                <Pie
                    data={state}
                    width={2000}
                    height={400}
                    options={{
                        title: {
                            display: true,
                            text: 'Antal fall per månad',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }

                    }}
                    />
            </div>
        );
    }
}

export default Chart;

