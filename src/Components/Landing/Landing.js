import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import Header from '../reusables/Header';

class Landing extends Component {

    componentDidMount() {
        this.props.fetchPlants();
    }

    componentDidUpdate(nextProps) {
        if(nextProps.newPlant) {
            this.props.plants.unshift(nextProps.newPlant);
        }
    }

    render() {

        const plantItems = this.props.plants.map(plant => (
            <div key={plant.id}>
                <h3>{plant.name}</h3>
                <p>{plant.idealWater}</p>
            </div>
        ))

        return(
            <>
            <Header />
            <h1>Landing</h1>

            <div>
                <h1>Plants</h1>
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