import React, { Component } from 'react'
import './headerstyle.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants } from '../../actions/plantActions';
import NewPlantModal from './NewPlantModal';

class Header extends Component {

    componentDidMount() {  
        this.props.fetchPlants();  
    }

    saveStorage = () => {
        localStorage.setItem(`state`, `[${this.props.plants.map((plant) => 
            `{
            id: ${plant.id},
            name: ${plant.name},
            plantDate: ${plant.plantDate},
            growTime: ${plant.growTime},
            idealWater: ${plant.idealWater},
            idealSun: ${plant.idealSun},
            picture: ${plant.picture}
            }`   
        )}]`);
        // const test = localStorage.getItem(`state`);
        // console.log(test);
    }

    render() {
        return(
            <nav className="nav header-custom">
                <div className="header-brand">
                    <h1>datagarden</h1>
                </div>
                <div className="links">
                    <Link to="/" className="link-box">
                    <   button className="header-button">Home</button>
                    </Link>
                    <Link to="/table" className="link-box">
                        <button className="header-button">Table</button>
                    </Link>
                    <Link to="/chart" className="link-box">
                    <button className="header-button">Chart</button>
                    </Link>
                </div>
                <div className="storage">
                    <button className="header-button" onClick={this.saveStorage}>Save Plants</button>
                    <button className="header-button">Load Plants</button>
                </div>
                <NewPlantModal />
            </nav>
        );
    }
}

Header.propTypes = {
    fetchPlants: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
});

export default connect(mapStateToProps, { fetchPlants })(Header);