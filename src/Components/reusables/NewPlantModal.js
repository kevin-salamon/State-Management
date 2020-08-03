import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPlant } from '../../actions/plantActions';
import './modalstyle.css';

class NewPlantModal extends Component {
    
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newPlant = {
            id: this.getId.value,
            name: this.getName.value,
            plantDate: this.getPlantDate.value,
            growTime: this.getGrowTime.value,
            idealWater: this.getWater.value,
            idealSun: this.getSun.value,
            picture: this.getPicture.value
        };

        console.log(`Adding plant to state: ${newPlant.name}`);
        this.props.createPlant(newPlant);
        
        this.setState({ showHide: false });
    }

    render() {
        return (
            <>
                <button className="btn header-button-add" style={{backgroundColor: "#463239", color: "white"}} onClick={() => this.handleModalShowHide()}>
                    Add Plant
                </button>

                <Modal show={this.state.showHide}>
                    <Modal.Header style={{backgroundColor: "#7FB285", color: "white"}} closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title style={{fontFamily: "'Roboto Slab', serif", fontSize: "30px"}}>Add Plant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#FAB3A9", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                        <form>

                            <div className="form-group text-center">
                                <label>ID: </label><br/>
                                <input
                                    className="input"
                                    ref={(input)=>this.getId = input}
                                    type="text"
                                    placeholder="ID"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Name: </label><br/>
                                <input
                                    className="input"
                                    ref={(input)=>this.getName = input}
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Planting Date: </label><br/>
                                <input
                                    className="input"
                                    ref={(input)=>this.getPlantDate = input}
                                    type="text"
                                    placeholder="Planting Date"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Days to Harvest: </label><br/>
                                <input
                                    className="input"
                                    ref={(input)=>this.getGrowTime = input}
                                    type="text"
                                    placeholder="Days to Harvest"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Ideal Water: </label><br/>
                                <input
                                    className="input"
                                    ref={(input)=>this.getWater = input}
                                    type="text"
                                    placeholder="Ideal Water"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Ideal Sun: </label><br/>
                                <input
                                    className="input"
                                    ref={(input)=>this.getSun = input}
                                    type="text"
                                    placeholder="Ideal Sun"
                                />
                            </div>
                            <div className="form-group text-center">
                                <label>Picture Link: </label><br/>
                                <textarea
                                    rows="3"
                                    style={{height: "65px"}}
                                    className="input"
                                    ref={(input)=>this.getPicture = input}
                                    type="text"
                                    placeholder="Full Link to Picture"
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

NewPlantModal.propTypes = {
    createPlant: PropTypes.func.isRequired
}

export default connect(null, { createPlant })(NewPlantModal);