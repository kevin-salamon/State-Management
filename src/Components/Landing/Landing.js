import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlants, deletePlant } from '../../actions/plantActions';
import EditPlantModal from '../reusables/EditPlantModal';
import './landingstyle.css';
import axios from 'axios';

class Landing extends Component {

    state = {
        search: "",
        temp: undefined,
        weather: undefined,
    }

    componentDidMount() {  
        this.props.fetchPlants();
        this.fetchWeather();
    }
    
    fetchWeather = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Long%20Valley&units=imperial&appid=a0a7ba2d11c89621064f9cd380b6e76e')
            .then(response => {
                console.log("Weather Data from OpenWeatherAPI", response.data);
                this.setState({ temp: (response.data.main.temp).toFixed(1) });
                this.setState({ weather: response.data.weather[0].description });
            })
            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        let searchTerm = event.target.value;
        this.setState({search: searchTerm});
    }

    render() {

        let filteredPlants = this.props.plants.filter((plant) => {
            return plant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        const plantItems = filteredPlants.map(plant => (
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
                    {plant.name.length ? (<h3>{plant.name}</h3>) : (<h3>N/A</h3>)}
                    {plant.plantDate.length ? (<p><span>You planted on:</span> {plant.plantDate}</p>) : (<p><span>You planted on:</span> N/A</p>)}
                    {plant.growTime.length ? (<p><span>Days to Harvest:</span> {plant.growTime} days, on average</p>) : (<p><span>Days to Harvest:</span> N/A </p>)}
                    {plant.idealWater.length ? (<p><span>Ideal water per week:</span> {plant.idealWater} inches</p>) : (<p><span>Ideal water per week:</span> N/A</p>)}
                    {plant.idealSun.length ? (<p><span>Ideal sun:</span> {plant.idealSun} sun</p>) : (<p><span>Ideal sun:</span> N/A</p>)}
                    <button className="list-button" onClick={() => this.props.deletePlant(plant.id)}>Delete Plant</button>
                    <EditPlantModal 
                        id={plant.id} // yes, this is a technically a prop-drill - I was drawing a blank on other ways to push the id to the respective component. Hopefully this doesn't violate the spirit of the project.
                    />
                </div>
            </div>
        ))

        return(
            <>
            <div className="top-flex-container-landing">Welcome back! It is currently {this.state.temp}°F ({this.state.weather}).
                <form className="form">
                                <input
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Filter Plants"
                                    className="filter-input"
                                />
                </form>
            </div>

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
    plants: state.items.plants,
});

export default connect(mapStateToProps, { fetchPlants, deletePlant })(Landing);