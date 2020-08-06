import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import './tablestyle.css';

class Table extends Component {

    render() {
        return(
            <>
            <h1 className="top-flex-container">Quick Reference Table</h1>
            <div className="table-container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
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
                                {plant.name.length ? (<th scope="row">{plant.name}</th>) : <th scope="row">N/A</th>}
                                    {plant.plantDate.length ? (<td>{plant.plantDate}</td>) : (<td>N/A</td>)}
                                    {plant.growTime.length ? (<td>{plant.growTime}</td>) : (<td>N/A</td>)}
                                    {plant.idealWater.length ? (<td>{plant.idealWater}</td>) : (<td>N/A</td>)}
                                    {plant.idealSun.length ? (<td>{plant.idealSun}</td>) : (<td>N/A</td>)}
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