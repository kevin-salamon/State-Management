import React, { Component } from "react";
import Header from '../reusables/Header';
import { Bar } from 'react-chartjs-2';
import './chartstyle.css';

class Chart extends Component {

    render() {

        const barChart = 
                <Bar
                    type = 'horizontalBar'
                    data = {{
                        labels: ['Corn', 'Tomatoes', 'Cucumbers', 'Spinach'],
                        datasets: [{
                            label: 'Days',
                            backgroundColor: 'lightblue',
                            data: [80, 60, 60, 30, 50]
                        }]
    
                    }}
                    options={{
                        title:{
                          display:true,
                          text:'Days from planting to harvest',
                          fontSize: 20
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        responsive: true,
                        legend:{
                          display:true,
                          position:'right'
                        }
                    }}
                />;

        return(
            <>
            <Header />
            <div>
                <h1>Chart</h1>
                <div className="chart-container">
                    {barChart}
                </div>
            </div>
            </>
        );
    }
    
}

export default Chart;