import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import Header from '../reusables/Header';
import './tablestyle.css';

class Table extends Component {

    render() {
        return(
            <>
            <Header />
            <div className="table-container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Plant Date</th>
                        <th scope="col">Days to Harvest</th>
                        <th scope="col">Water/wk (inches)</th>
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
            </div>
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