import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import Header from '../reusables/Header';

class Table extends Component {

    render() {
        return(
            <>
            <Header />
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Plant Date</th>
                    <th scope="col">Days to Maturation</th>
                    <th scope="col">Inches of Water per week</th>
                    <th scope="col">Ideal sun</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.plants.map(plant => (
                        <tr>
                            <th scope="row">{plant.id}</th>
                                <td>{plant.name}</td>
                                <td>{plant.plantDate}</td>
                                <td>{plant.growTime}</td>
                                <td>{plant.idealWater}</td>
                                <td>{plant.idealSun}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }

}

Table.propTypes = {
    fetchPlants: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
    newPlant: PropTypes.object
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
    newPlant: state.plants.plant
});

export default connect(mapStateToProps, { fetchPlants })(Table);