import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPlant, fetchPlants } from '../../actions/plantActions';
import './modalstyle.css';

class EditPlantModal extends Component {
    
    constructor(props){
        super(props);      // see Landing.js comment, line 37

        const propIdRender = this.props.id; 
        const plantItem = this.props.plants.find(plant => plant.id === propIdRender);

        this.state = {
            showHide : false,
            name: plantItem.name,
            plantDate: plantItem.plantDate,
            growTime: plantItem.growTime,
            idealWater: plantItem.idealWater,
            idealSun: plantItem.idealSun,
            picture: plantItem.picture
        }
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidMount() {  
        this.props.fetchPlants();  
    }  

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const propsId = this.props.id;
        const editedPlant = {
            id: propsId,
            name: this.state.name,
            plantDate: this.state.plantDate,
            growTime: this.state.growTime,
            idealWater: this.state.idealWater,
            idealSun: this.state.idealSun,
            picture: this.state.picture
        };

        console.log(`Editing existing plant: ${editedPlant.name}`);
        this.props.editPlant(editedPlant);
        
        this.setState({ showHide: false });
    }

    render() {

        return (
            <>
                <button className="btn list-button" style={{backgroundColor: "#463239", color: "white"}} onClick={() => this.handleModalShowHide()}>
                    Edit Plant
                </button>

                <Modal show={this.state.showHide}>
                    <Modal.Header style={{backgroundColor: "#7FB285", color: "white"}} closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title style={{fontFamily: "'Roboto Slab', serif", fontSize: "30px"}}>Edit Plant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#FAB3A9", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                        <form>
                            <div className="form-group text-center">
                                <label>Name: </label><br/>
                                <input
                                    className="input"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Planting Date: </label><br/>
                                <input
                                    className="input"
                                    onChange={this.onChange}
                                    value={this.state.plantDate}
                                    type="text"
                                    name="plantDate"
                                    placeholder="Planting Date"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Days to Harvest: </label><br/>
                                <input
                                    className="input"
                                    onChange={this.onChange}
                                    value={this.state.growTime}
                                    type="text"
                                    name="growTime"
                                    placeholder="Days to Harvest"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Ideal Water (inches): </label><br/>
                                <input
                                    className="input"
                                    onChange={this.onChange}
                                    value={this.state.idealWater}
                                    name="idealWater"
                                    type="text"
                                    placeholder="Water per week in inches"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Ideal Sun Exposure: </label><br/>
                                <input
                                    className="input"
                                    onChange={this.onChange}
                                    value={this.state.idealSun}
                                    type="text"
                                    name="idealSun"
                                    placeholder="Ideal sun exposure"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Picture Link: </label><br/>
                                <textarea
                                    rows="3"
                                    style={{height: "65px"}}
                                    onChange={this.onChange}
                                    className="input"
                                    value={this.state.picture}
                                    name="picture"
                                    type="text"
                                    placeholder="Full link"
                                />
                            </div>
                        </form>

                        <button className="btn btn-light header-button" style={{margin: "0 auto"}} onClick={this.handleSubmit}>
                            Submit
                        </button>

                    </Modal.Body>

                </Modal>
            </>
        );
    }
}

EditPlantModal.propTypes = {
    editPlant: PropTypes.func.isRequired,
    fetchPlants: PropTypes.func.isRequired,
    plants: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    plants: state.plants.plants,
});

export default connect(mapStateToProps, { editPlant, fetchPlants })(EditPlantModal);