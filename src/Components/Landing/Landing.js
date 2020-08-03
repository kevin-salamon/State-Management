import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants, deletePlant } from '../../actions/plantActions';
import Header from '../reusables/Header';
import EditPlantModal from '../reusables/EditPlantModal';
import './landingstyle.css';

class Landing extends Component {

    componentDidMount() {  
        this.props.fetchPlants();  
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
                    <button className="list-button" onClick={() => this.props.deletePlant(plant.id)}>Delete Plant</button>
                    <EditPlantModal 
                        id={plant.id} // yes, this is a technically a prop-drill - I was drawing a blank on other ways to pull the id from the respective component. Hopefully this doesn't violate the spirit of the project.
                    />
                </div>
            </div>
        ))

        return(
            <>
            <Header />
            <h1 className="top-flex-container">Welcome back! Here are the crops you've planted...</h1>

            <div className="flex-container">
                {plantItems}
            </div>
            </>
        );
    }

}

Landing.propTypes = {
    fetchPlants: PropTypes.func.isRequired,
    deletePlant: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
});

export default connect(mapStateToProps, { fetchPlants, deletePlant })(Landing);