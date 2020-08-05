import React, { Component } from "react";
import Header from '../reusables/Header';
import { HorizontalBar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import styles from './Chart.module.css';
// import './chartstyle.css';

class Chart extends Component {

    render() {

        
        const barChart = 
                <HorizontalBar
                    data = {{
                        labels: this.props.plants.map(plant => plant.name),
                        datasets: [{
                            label: 'Days',
                            backgroundColor: '#FAB3A9',
                            data: this.props.plants.map(plant => plant.growTime),
                            barPercentage: 0.5,
                            borderColor: '#ec6553',
                            borderWidth: 2       
                        }]
    
                    }}
                    options={{
                        title:{
                          display:true,
                          text:'Days from planting to harvest',
                          fontSize: 20
                        },
                        layout: {
                            padding: 20
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                }
                            }]
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        legend:{
                          fullWidth: true
                        },
                        
                    }}
                />;

        return(
            <>
            <Header />
            <h1 className={styles.top}>Chart of Growing Times</h1>
            <div>
                <div className={styles.container}>
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