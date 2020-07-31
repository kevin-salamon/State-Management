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
                    <p>You planted this on {plant.plantDate}</p>
                    <p>This plant takes {plant.growTime} days to grow, on average</p>
                    <p>Ideal water per week: {plant.idealWater} inches</p>
                    <p>Ideal sun: {plant.idealSun}</p>
                </div>
            </div>
        ))

        return(
            <>
            <Header />
            <h1>Landing</h1>

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