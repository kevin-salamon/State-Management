import React, { Component } from "react";
import Header from '../reusables/Header';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import './chartstyle.css';

class Chart extends Component {

    render() {

        
        const barChart = 
                <Bar
                    type = 'horizontalBar'
                    data = {{
                        labels: this.props.plants.map(plant => plant.name),
                        datasets: [{
                            label: 'Days',
                            backgroundColor: 'lightblue',
                            data: this.props.plants.map(plant => plant.growTime)
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

Chart.propTypes = {
    fetchPlants: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
    newPlant: PropTypes.object
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
    newPlant: state.plants.plant
});

export default connect(mapStateToProps, { fetchPlants })(Chart);