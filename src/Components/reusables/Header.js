import React, { Component } from 'react'
import './headerstyle.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants, loadPlants } from '../../actions/plantActions';
import NewPlantModal from './NewPlantModal';

class Header extends Component {

    componentDidMount() {  
        this.props.fetchPlants();  
    }

    saveStorage = () => {
        localStorage.setItem(`state`, `${this.props.plants.map((plant) => 
            `{
            id: ${plant.id},
            name: ${plant.name},
            plantDate: ${plant.plantDate},
            growTime: ${plant.growTime},
            idealWater: ${plant.idealWater},
            idealSun: ${plant.idealSun},
            picture: ${plant.picture}
            }`   
        )}`);
    }

    loadStorage = () => {
        const data = localStorage.getItem(`state`);
        let formattedData = data.split("{")
        console.log(formattedData);
        this.props.loadPlants(formattedData);
    }

    render() {
        return(
            <nav className="nav header-custom">
                <div className="header-brand">
                    <h1>datagarden</h1>
                </div>
                <div className="links">
                    <Link to="/" className="link-box">
                    <   button className="header-button-link">Home</button>
                    </Link>
                    <Link to="/table" className="link-box">
                        <button className="header-button-link">Table</button>
                    </Link>
                    <Link to="/chart" className="link-box">
                    <button className="header-button-link">Chart</button>
                    </Link>
                </div>
                <div className="storage">
                    <button className="header-button" onClick={this.saveStorage}>Save Plants</button>
                    <button className="header-button" onClick={this.loadStorage}>Load Plants</button>
                </div>
                <NewPlantModal />
            </nav>
        );
    }
}

Header.propTypes = {
    fetchPlants: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
    loadPlants: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
});

export default connect(mapStateToProps, { fetchPlants, loadPlants })(Header);