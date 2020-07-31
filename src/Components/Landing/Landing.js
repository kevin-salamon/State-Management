import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import Header from '../reusables/Header';
import './landingstyle.css';

class Landing extends Component {

    // componentDidMount() {
    //     this.props.fetchPlants();
    // }

    componentDidUpdate(nextProps) {
        if(nextProps.newPlant) {
            this.props.plants.unshift(nextProps.newPlant);
        }
    }

    render() {

        const plantItems = this.props.plants.map(plant => (
            <div className="plant-flex-container">
                <div className="image-container" style={{background: `linear-gradient(
                        rgba(0, 0, 0, 0.0),
                        rgba(0, 0, 0, 0.0)
                    ), url(${plant.picture}) center`,
                    WebkitBackgroundSize: "cover",
                    MozBackgroundSize: "cover",
                    OBackgroundSize: "cover",
                    backgroundSize: "cover"
                    }}>
                </div>
                <div key={plant.id} className="plant-container">
                    <h3>{plant.name}</h3>
                    <p><span>You planted on:</span> {plant.plantDate}</p>
                    <p><span>Days to Harvest:</span> {plant.growTime} days, on average</p>
                    <p><span>Ideal water per week:</span> {plant.idealWater} inches</p>
                    <p><span>Ideal sun:</span> {plant.idealSun} sun</p>
                </div>
            </div>
        ))

        return(
            <>
            <Header />
            <h1 className="top-flex-container">Welcome back! Here are the crops you've planted.</h1>

            <div className="flex-container">
                {plantItems}
            </div>
            </>
        );
    }

}

Landing.propTypes = {
    fetchPlants: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
    newPlant: PropTypes.object
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
    newPlant: state.plants.plant
});

export default connect(mapStateToProps, { fetchPlants })(Landing);